import React from 'react';
function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <h2>Your Stack</h2>
      <p className="stack-count">
        {stack.length ? `${stack.length} Technology${stack.length > 1 ? 'ies' : 'y'} Selected` : 'No technology selected yet.'}
      </p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt="" />
                <div className="stack-item-text">
                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
                <button
                  className="remove-button"
                  aria-label={`Remove ${technology.name}`}
                  onClick={() => onRemove(technology.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;
