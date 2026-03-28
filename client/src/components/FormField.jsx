export default function FormField({ field, fieldKey, value, onChange }) {
  const isLong = field.name.length > 42;
  const safeId = 'f_' + fieldKey.replace(/[^a-zA-Z0-9]/g, '_');
  const val = value ?? field.default ?? '';

  let input;
  if (field.type === 'Dropdown') {
    input = (
      <select
        className="form-select"
        id={safeId}
        value={val}
        onChange={e => onChange(fieldKey, e.target.value)}
      >
        {(field.options || []).map(o => (
          <option key={o} value={o} disabled={o === ''}>
            {o === '' ? `— Select ${field.name} —` : o}
          </option>
        ))}
      </select>
    );
  } else if (field.type === 'Percentage') {
    input = (
      <input
        type="number" className="form-input" id={safeId}
        placeholder={field.default || '0'} value={val}
        step="0.01" min="0" max="100"
        onChange={e => onChange(fieldKey, e.target.value)}
      />
    );
  } else if (field.type === 'Currency' || field.type === 'Number') {
    input = (
      <input
        type="number" className="form-input" id={safeId}
        placeholder={field.default || 'Enter value'} value={val}
        step="any"
        onChange={e => onChange(fieldKey, e.target.value)}
      />
    );
  } else {
    input = (
      <input
        type="text" className="form-input" id={safeId}
        placeholder={field.default || 'Enter value'} value={val}
        onChange={e => onChange(fieldKey, e.target.value)}
      />
    );
  }

  return (
    <div className={`form-field${isLong ? ' full' : ''}`}>
      <label className="form-label" htmlFor={safeId}>
        {field.name}
        {field.unit && <span className="form-unit">{field.unit}</span>}
      </label>
      {input}
    </div>
  );
}
