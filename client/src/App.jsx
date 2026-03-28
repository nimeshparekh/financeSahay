import { useState, useCallback } from 'react';
import { STATIC_SECTIONS } from './data/staticSections';
import { DYNAMIC_DATA } from './data/dynamicData';
import CompanyPanel from './components/CompanyPanel';
import StaticPanel from './components/StaticPanel';
import ModelSelector from './components/ModelSelector';
import DynamicPanel from './components/DynamicPanel';
import ActionBar from './components/ActionBar';
import Toast from './components/Toast';
import Steps from './components/Steps';
import img from './assets/mainLogo.png';

export default function App() {
  // key = "catId|modelId" -> { catId, modelId }  — plain object for reliable React re-renders
  const [companyInfo, setCompanyInfo] = useState({ company_name: '', company_number: '', company_email: '', services_name: '' });
  const [selectedModels, setSelectedModels] = useState({});
  const [formValues, setFormValues] = useState({});
  const [toast, setToast] = useState({ msg: '', type: 'ok', show: false });
  const [submitting, setSubmitting] = useState(false);

  const handleCompanyChange = useCallback((key, value) => {
    setCompanyInfo(prev => ({ ...prev, [key]: value }));
  }, []);

  const showToast = useCallback((msg, type = 'ok') => {
    setToast({ msg, type, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3000);
  }, []);

  const saveValue = useCallback((key, value) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleModel = useCallback((catId, modelId) => {
    const key = `${catId}|${modelId}`;
    setSelectedModels(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = { catId, modelId };
      return next;
    });
  }, []);

  const selectedEntries = Object.values(selectedModels); // [{ catId, modelId }, ...]
  const selectedCount = selectedEntries.length;

  const staticFieldCount = Object.values(STATIC_SECTIONS).reduce((a, f) => a + f.length, 0);
  const dynFieldCount = selectedEntries.reduce(
    (a, { catId, modelId }) => a + DYNAMIC_DATA[catId].models[modelId].fields.length, 0
  );
  const totalFields = staticFieldCount + dynFieldCount;
  const step = selectedCount === 0 ? 2 : 3;

  const isSelected = (catId, modelId) => !!selectedModels[`${catId}|${modelId}`];

  const gatherData = () => {
    const out = {
      exported_at: new Date().toISOString(),
      company_info: companyInfo,
      selected_models: [],
      static_assumptions: {},
      dynamic_assumptions: {},
    };
    selectedEntries.forEach(({ catId, modelId }) => {
      out.selected_models.push({
        cat_id: catId, cat_name: DYNAMIC_DATA[catId]?.name,
        model_id: modelId, model_name: DYNAMIC_DATA[catId]?.models[modelId]?.name,
      });
    });
    Object.entries(STATIC_SECTIONS).forEach(([section, fields]) => {
      fields.forEach(f => {
        const key = `static||${section}||${f.name}`;
        out.static_assumptions[f.name] = formValues[key] ?? f.default ?? '';
      });
    });
    selectedEntries.forEach(({ catId, modelId }) => {
      const model = DYNAMIC_DATA[catId].models[modelId];
      const obj = {};
      model.fields.forEach(f => {
        const key = `${catId}|${modelId}||${modelId}||${f.name}`;
        obj[f.name] = formValues[key] ?? f.default ?? '';
      });
      out.dynamic_assumptions[`${modelId} — ${model.name}`] = obj;
    });
    return out;
  };

  const buildCSV = (data) => {
    const rows = [];
    const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;

    // Company Info
    rows.push(['Section', 'Field', 'Value']);
    rows.push([]);
    rows.push(['COMPANY INFORMATION', '', '']);
    const co = data.company_info || {};
    rows.push(['Company Info', 'Company Name', esc(co.company_name)]);
    rows.push(['Company Info', 'Company Phone Number', esc(co.company_number)]);
    rows.push(['Company Info', 'Company Email', esc(co.company_email)]);
    rows.push(['Company Info', 'Services Name', esc(co.services_name)]);

    // Selected Models
    rows.push([]);
    rows.push(['SELECTED REVENUE MODELS', '', '']);
    (data.selected_models || []).forEach(m => {
      rows.push([esc(m.cat_name), esc(m.model_id), esc(m.model_name)]);
    });

    // Static Assumptions
    rows.push([]);
    rows.push(['STATIC ASSUMPTIONS', '', '']);
    Object.entries(data.static_assumptions || {}).forEach(([k, v]) => {
      rows.push(['Static', esc(k), esc(v)]);
    });

    // Dynamic Assumptions
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
  };

  const handleExport = () => {
    const data = gatherData();
    const csv = buildCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `financial_assumptions_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV exported');
  };

  const handleSaveDraft = () => {
    localStorage.setItem('finmodel_draft', JSON.stringify({ companyInfo, formValues, selectedModels }));
    showToast('Draft saved');
  };

  const handleReset = () => {
    if (!confirm('Reset all values? This cannot be undone.')) return;
    setCompanyInfo({ company_name: '', company_number: '', company_email: '', services_name: '' });
    setFormValues({});
    setSelectedModels({});
    showToast('Form reset');
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const data = gatherData();
      const res = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: data }),
      });
      const json = await res.json();
      if (res.ok) showToast('Submitted & emailed successfully');
      else showToast(json.error || 'Submission failed', 'error');
    } catch {
      showToast('Could not reach server', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <header className="header">
        <img className="header-logo" src={img} style={{width:'150px'}}></img>
        <div className="header-badge">Financial Model Assumption Form</div>
      </header>

      <div className="layout">
        <main className="main">
          <Steps step={step} />
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: step === 2 ? '25%' : '75%' }} />
          </div>

          <CompanyPanel values={companyInfo} onChange={handleCompanyChange} />

          <StaticPanel sections={STATIC_SECTIONS} formValues={formValues} saveValue={saveValue} />
          <ModelSelector
            dynamicData={DYNAMIC_DATA}
            selectedModels={selectedModels}
            isSelected={isSelected}
            toggleModel={toggleModel}
          />

          {selectedCount === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◻</div>
              <div className="empty-title">No Revenue Model Selected</div>
              <div className="empty-desc">Pick a category above, then select one or more revenue models.</div>
            </div>
          ) : (
            selectedEntries.map(({ catId, modelId }) => (
              <DynamicPanel
                key={`${catId}|${modelId}`}
                catId={catId}
                modelId={modelId}
                cat={DYNAMIC_DATA[catId]}
                model={DYNAMIC_DATA[catId].models[modelId]}
                formValues={formValues}
                saveValue={saveValue}
                onRemove={() => toggleModel(catId, modelId)}
              />
            ))
          )}
        </main>
      </div>

      <ActionBar
        totalFields={totalFields}
        onReset={handleReset}
        onSaveDraft={handleSaveDraft}
        onExport={handleExport}
        onSubmit={handleSubmit}
        submitting={submitting}
      />

      <Toast msg={toast.msg} type={toast.type} show={toast.show} />
    </>
  );
}
