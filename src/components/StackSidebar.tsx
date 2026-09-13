import type { Technology } from "../types";
import "./StackSidebar.css";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="stack-sidebar">
      <div className="stack-header">
        <div>
          <p className="eyebrow">MY COLLECTION</p>
          <h2>Your <span className="gradient-text">Stack</span></h2>
        </div>
        <span className="selected-count">{stack.length}</span>
      </div>

      <p className="selected-text">
        {stack.length} Technology{stack.length === 1 ? "" : "ies"} Selected
      </p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>
            Add technologies from the list to create your personalized stack.
          </p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div className="stack-item-info">
                  <strong>{item.name}</strong>
                  <span>{item.category}</span>
                </div>
                <button
                  className="remove-btn"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => onRemove(item.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button className="remove-all-btn" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
