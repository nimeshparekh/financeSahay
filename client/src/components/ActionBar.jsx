export default function ActionBar({ totalFields, onReset, onSaveDraft, onExport, onSubmit, submitting }) {
  return (
    <div className="action-bar">
      <span className="field-count-label">
        Total fields: <span className="field-count-num">{totalFields}</span>
      </span>
      <div className="action-spacer" />
      <button className="btn btn-ghost" onClick={onReset}>↺ Reset</button>
      <button className="btn btn-secondary" onClick={onSaveDraft}>💾 Save Draft</button>
      <button className="btn btn-secondary" onClick={onExport}>⬇ Export CSV</button>
      <button className="btn btn-primary" onClick={onSubmit} disabled={submitting}>
        {submitting ? 'Sending...' : '✉ Submit & Email'}
      </button>
    </div>
  );
}
