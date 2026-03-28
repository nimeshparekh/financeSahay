export default function CompanyPanel({ values, onChange }) {
  const fields = [
    { key: 'company_name', label: 'Company Name', placeholder: 'e.g. Acme Pvt. Ltd.', type: 'text' },
    { key: 'company_number', label: 'Company Phone Number', placeholder: 'e.g. +91 98765 43210', type: 'tel' },
    { key: 'company_email', label: 'Company Email', placeholder: 'e.g. info@company.com', type: 'email' },
    { key: 'services_name', label: 'Services Name', placeholder: 'e.g. SaaS Platform, Consulting, Retail', type: 'text' },
  ];

  return (
    <div className="panel" id="company-panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Company Information</div>
          <div className="panel-desc">Basic details about your company. These will appear in the submitted report.</div>
        </div>
        <span className="tag tag-static">Required</span>
      </div>
      <div className="form-grid">
        {fields.map(f => (
          <div className="form-field" key={f.key}>
            <label className="form-label" htmlFor={f.key}>{f.label}</label>
            <input
              id={f.key}
              type={f.type}
              className="form-input"
              placeholder={f.placeholder}
              value={values[f.key] || ''}
              onChange={e => onChange(f.key, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
