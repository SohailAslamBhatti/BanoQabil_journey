import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Todo.css";

function TodoItem({ text, onEdit, onDelete }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{text}</span>
      <div className="btn-group">
        <button onClick={onEdit} className="btn edit-btn">
          <FaEdit />
        </button>
        <button onClick={onDelete} className="btn delete-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
