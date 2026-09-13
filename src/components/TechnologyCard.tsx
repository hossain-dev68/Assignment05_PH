import type { Technology } from "../types";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="icon-box">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
          />
        </div>

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="card-description">
        {technology.description}
      </p>

      <div className="card-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <span className="rating">
          <span className="star">★</span>
          {technology.rating}
        </span>

        <button
          className={`add-btn ${isAdded ? "added" : ""}`}
          disabled={isAdded}
          onClick={() => onAdd(technology)}
        >
          {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;