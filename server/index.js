require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const PORT = process.env.PORT || 5000;
const RECIPIENTS = 'support@startupsahay.com';

// ── MongoDB connection ──────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err.message));

// ── Schema ──────────────────────────────────────────────────
const submissionSchema = new mongoose.Schema({
  submitted_at: { type: Date, default: Date.now },
  company_info: {
    company_name:   String,
    company_number: String,
    company_email:  String,
    services_name:  String,
  },
  selected_models: [
    {
      cat_id:     String,
      cat_name:   String,
      model_id:   String,
      model_name: String,
    }
  ],
  static_assumptions:  { type: mongoose.Schema.Types.Mixed },
  dynamic_assumptions: { type: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

const Submission = mongoose.model('Submission', submissionSchema);

// ── SMTP transporter ────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error('❌ SMTP auth failed:', err.message);
  else console.log('✅ SMTP ready —', process.env.EMAIL_USER);
});

// ── POST /api/submit ────────────────────────────────────────
app.post('/api/submit', async (req, res) => {
  const { formData } = req.body;
  if (!formData) return res.status(400).json({ error: 'No form data provided' });

  try {
    // 1. Save to MongoDB
    const doc = new Submission({
      company_info:        formData.company_info || {},
      selected_models:     formData.selected_models || [],
      static_assumptions:  formData.static_assumptions || {},
      dynamic_assumptions: formData.dynamic_assumptions || {},
    });
    await doc.save();
    console.log('💾 Saved to DB — id:', doc._id);

    // 2. Send email
    const htmlBody = buildEmailHTML(formData);
    const csvContent = buildCSV(formData);
    await transporter.sendMail({
      from: `"FinModel Form" <${process.env.EMAIL_USER}>`,
      to: RECIPIENTS,
      subject: `Financial Model Assumptions — ${formData.company_info?.company_name || 'Submission'} — ${new Date().toLocaleDateString('en-IN')}`,
      html: htmlBody,
      attachments: [
        {
          filename: `financial_assumptions_${new Date().toISOString().slice(0, 10)}.csv`,
          content: csvContent,
          contentType: 'text/csv',
        },
      ],
    });

    res.json({ success: true, message: 'Saved to database and emailed successfully.', id: doc._id });
  } catch (err) {
    console.error('Submit error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/submissions ─────────────────────────────────────
app.get('/api/submissions', async (req, res) => {
  try {
    const list = await Submission.find().sort({ createdAt: -1 }).select('company_info selected_models createdAt');
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/submissions/:id ─────────────────────────────────
app.get('/api/submissions/:id', async (req, res) => {
  try {
    const doc = await Submission.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── CSV builder ──────────────────────────────────────────────
function buildCSV(data) {
  const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [];

  rows.push(['Section', 'Field', 'Value']);
  rows.push([]);
  rows.push(['COMPANY INFORMATION', '', '']);
  const co = data.company_info || {};
  rows.push(['Company Info', 'Company Name', esc(co.company_name)]);
  rows.push(['Company Info', 'Company Phone Number', esc(co.company_number)]);
  rows.push(['Company Info', 'Company Email', esc(co.company_email)]);
  rows.push(['Company Info', 'Services Name', esc(co.services_name)]);

  rows.push([]);
  rows.push(['SELECTED REVENUE MODELS', '', '']);
  (data.selected_models || []).forEach(m => {
    rows.push([esc(m.cat_name), esc(m.model_id), esc(m.model_name)]);
  });

  rows.push([]);
  rows.push(['STATIC ASSUMPTIONS', '', '']);
  Object.entries(data.static_assumptions || {}).forEach(([k, v]) => {
    rows.push(['Static', esc(k), esc(v)]);
  });

  rows.push([]);
  rows.push(['REVENUE MODEL ASSUMPTIONS', '', '']);
  Object.entries(data.dynamic_assumptions || {}).forEach(([modelName, fields]) => {
    rows.push([]);
    rows.push([esc(modelName), '', '']);
    Object.entries(fields || {}).forEach(([k, v]) => {
      rows.push(['', esc(k), esc(v)]);
    });
  });

  return rows.map(r => r.join(',')).join('\n');
}

// ── Email HTML builder ───────────────────────────────────────
function buildEmailHTML(data) {
  const co = data.company_info || {};
  const companyBlock = `
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;background:#f8f9fa;border-radius:8px;overflow:hidden">
      <tr><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;color:#555;width:40%">Company Name</td><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;font-weight:600">${co.company_name || '—'}</td></tr>
      <tr><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;color:#555">Company Phone Number</td><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;font-weight:600">${co.company_number || '—'}</td></tr>
      <tr><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;color:#555">Company Email</td><td style="padding:10px 14px;border-bottom:1px solid #e9ecef;font-weight:600">${co.company_email || '—'}</td></tr>
      <tr><td style="padding:10px 14px;color:#555">Services Name</td><td style="padding:10px 14px;font-weight:600">${co.services_name || '—'}</td></tr>
    </table>`;

  const models = (data.selected_models || [])
    .map((m) => `<li><b>${m.model_id}</b> — ${m.model_name} <span style="color:#666">(${m.cat_name})</span></li>`)
    .join('');

  const staticRows = Object.entries(data.static_assumptions || {})
    .map(([k, v]) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;color:#444">${k}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:600">${v || '—'}</td></tr>`)
    .join('');

  let dynSections = '';
  Object.entries(data.dynamic_assumptions || {}).forEach(([modelName, fields]) => {
    const rows = Object.entries(fields)
      .map(([k, v]) => `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee;color:#444">${k}</td><td style="padding:6px 10px;border-bottom:1px solid #eee;font-weight:600">${v || '—'}</td></tr>`)
      .join('');
    dynSections += `
      <h3 style="margin:24px 0 8px;font-size:15px;color:#111;border-left:4px solid #111;padding-left:10px">${modelName}</h3>
      <table style="width:100%;border-collapse:collapse;font-size:13px;font-family:sans-serif">${rows}</table>`;
  });

  return `
    <div style="font-family:sans-serif;max-width:700px;margin:0 auto;background:#fff;padding:32px">
      <h1 style="font-size:22px;margin-bottom:4px;color:#111">Financial Model Assumptions</h1>
      <p style="color:#666;font-size:13px;margin-bottom:24px">Submitted on ${new Date().toLocaleString('en-IN')}</p>
      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:10px">Company Information</h2>
      ${companyBlock}
      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:8px">Selected Revenue Models</h2>
      <ul style="font-size:13px;line-height:2;padding-left:20px;margin-bottom:24px">${models || '<li>None</li>'}</ul>
      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:8px">Static Assumptions</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px">${staticRows}</table>
      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#888;margin:24px 0 8px">Revenue Model Assumptions</h2>
      ${dynSections || '<p style="color:#888;font-size:13px">No revenue models selected.</p>'}
      <p style="margin-top:32px;font-size:11px;color:#aaa">Full JSON attached to this email.</p>
    </div>`;
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
