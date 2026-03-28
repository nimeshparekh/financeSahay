import FormField from './FormField';

export default function DynamicPanel({ catId, modelId, cat, model, formValues, saveValue, onRemove }) {
  const prefix = `${catId}|${modelId}`;

  return (
    <div className="dyn-panel">
      <div className="dyn-panel-header">
        <div>
          <div className="dyn-panel-title">{model.name}</div>
          <div className="dyn-panel-meta">
            <span style={{ fontFamily: 'monospace', fontSize: 10 }}>{modelId}</span>
            {' · '}{cat.name}{' · '}{model.fields.length} fields
          </div>
        </div>
        <button className="remove-btn" onClick={onRemove}>✕ Remove</button>
      </div>

      <div className="form-section">
        <div className="form-section-header">
          <div className="form-section-dot" />
          <div className="form-section-title">Revenue Model Parameters</div>
          <div className="form-section-count">{model.fields.length} fields</div>
        </div>
        <div className="form-grid">
          {model.fields.map(f => {
            const key = `${prefix}||${modelId}||${f.name}`;
            return (
              <FormField
                key={key}
                field={f}
                fieldKey={key}
                value={formValues[key]}
                onChange={saveValue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
