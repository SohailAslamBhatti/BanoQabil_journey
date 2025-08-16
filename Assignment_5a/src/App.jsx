import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTodo = (text) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = text;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="title">📝 Add Your List Here ✌</h1>

      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        editTodo={editIndex !== null ? todos[editIndex] : ""}
      />

      <TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
