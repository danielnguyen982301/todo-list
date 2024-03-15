import React from "react";

function Task({ task, toggleStatus, deleteTask }) {
  const { title, status, id } = task;
  return (
    <li className={status ? "done" : ""}>
      <span className="label">{title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={!!status}
          onChange={() => toggleStatus(id)}
        />
        <button
          className="btn-action btn-action-delete"
          onClick={(e) => deleteTask(id, e.target.parentNode.parentNode)}
        >
          &#10008;
        </button>
      </div>
    </li>
  );
}

export default Task;
