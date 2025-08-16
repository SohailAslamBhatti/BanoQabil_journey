import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import "./Todo.css";

function TodoForm({ addOrUpdateTodo, editTodo }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(editTodo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addOrUpdateTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="✍ Add Items..."
        className="todo-input"
      />
      <button type="submit" className="btn add-btn">
        <FaPlus />
      </button>
    </form>
  );
}

export default TodoForm;
