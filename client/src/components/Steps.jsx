export default function Steps({ step }) {
  const steps = ['Project Setup', 'Select Revenue Models', 'Fill Assumptions', 'Review & Export'];
  return (
    <div className="steps">
      {steps.map((label, i) => {
        const num = i + 1;
        const isDone = num < step;
        const isActive = num === step;
        return (
          <>
            <div key={label} className={`step${isDone ? ' done' : isActive ? ' active' : ''}`}>
              <div className="step-num">{isDone ? '✓' : num}</div>
              <div className="step-label">{label}</div>
            </div>
            {i < steps.length - 1 && <span key={`arr-${i}`} className="step-arrow">›</span>}
          </>
        );
      })}
    </div>
  );
}
