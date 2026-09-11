function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <img src={technology.icon} alt="" className="tech-icon" />
        {technology.badge && <span className="badge">{technology.badge}</span>}
      </div>

      <h3>{technology.name}</h3>
      <p className="tech-description">{technology.description}</p>

      <div className="card-meta">
        <span className="chip">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
        <span className="rating">★ {technology.rating.toFixed(1)}</span>
      </div>

      <button
        className={`add-button ${isAdded ? 'added' : ''}`}
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
}

export default TechnologyCard;
