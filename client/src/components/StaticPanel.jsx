import FormField from './FormField';

const SECTION_COLORS = ['#0a0a0a','#333','#555','#777','#999','#444','#222','#666','#888'];

export default function StaticPanel({ sections, formValues, saveValue }) {
  return (
    <div className="panel" id="static-panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Static Assumptions</div>
          <div className="panel-desc">These fields apply to all business models. Fill these first.</div>
        </div>
        <span className="tag tag-static">All Models</span>
      </div>

      {Object.entries(sections).map(([sectionName, fields], idx) => (
        <div className="form-section" key={sectionName}>
          <div className="form-section-header">
            <div className="form-section-dot" style={{ background: SECTION_COLORS[idx % SECTION_COLORS.length] }} />
            <div className="form-section-title">{sectionName}</div>
            <div className="form-section-count">{fields.length} fields</div>
          </div>
          <div className="form-grid">
            {fields.map(f => {
              const key = `static||${sectionName}||${f.name}`;
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
      ))}
    </div>
  );
}
