import { useState } from 'react';

export default function ModelSelector({ dynamicData, selectedModels, isSelected, toggleModel }) {
  const [activeCatId, setActiveCatId] = useState(null);

  const selectedList = Object.values(selectedModels);

  return (
    <div className="panel" id="selector-panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Select Revenue Models</div>
          <div className="panel-desc">A startup can have multiple revenue streams. Select all that apply.</div>
        </div>
        <span className="tag tag-multi">Multi-Select</span>
      </div>

      {/* Selected chips */}
      {selectedList.length > 0 && (
        <div className="chips-wrap">
          <div className="chips-label">Currently Selected</div>
          <div className="chips-row">
            {selectedList.map(({ catId, modelId }) => {
              const name = dynamicData[catId].models[modelId].name;
              return (
                <span className="chip" key={`${catId}|${modelId}`}>
                  <span className="chip-id">{modelId}</span>
                  {name}
                  <button className="chip-remove" onClick={() => toggleModel(catId, modelId)}>✕</button>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 1: Category */}
      <div style={{ marginBottom: 16 }}>
        <div className="model-area-label">Step 1 — Pick a Business Category</div>
        <div className="cat-grid">
          {Object.entries(dynamicData).map(([catId, cat]) => (
            <div
              key={catId}
              className={`cat-card${activeCatId === catId ? ' selected' : ''}`}
              onClick={() => setActiveCatId(catId)}
            >
              <div className="cat-card-id">{catId}</div>
              <div className="cat-card-name">{cat.name}</div>
              <div className="cat-card-count">{Object.keys(cat.models).length} models</div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Models */}
      {activeCatId && (
        <div>
          <div className="model-area-label">
            Step 2 — Select Revenue Model(s)
            <span className="model-area-hint">Click to add · click again to remove</span>
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
            {activeCatId} — {dynamicData[activeCatId].name}
          </div>
          <div className="model-list">
            {Object.entries(dynamicData[activeCatId].models).map(([modelId, model]) => {
              const added = isSelected(activeCatId, modelId);
              return (
                <div
                  key={modelId}
                  className={`model-card${added ? ' added' : ''}`}
                  onClick={() => toggleModel(activeCatId, modelId)}
                >
                  <span className="model-card-id">{modelId}</span>
                  <span className="model-card-name">{model.name}</span>
                  {added && <span className="model-card-check">✓</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
