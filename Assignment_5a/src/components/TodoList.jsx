import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function TodoList({ todos, onEdit, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
