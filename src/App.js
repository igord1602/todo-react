import React, { useState } from "react";
import "./App.css";
import EditForm from "./edit-form-container/EditForm";
import TodoListPage from "./todo-list-container/TodoListPage";

const TodoApp = (props) => {
  const [allTodo, setAllTodo] = useState(props.allTodo);

  const handleCreateTodo = (todo) => {
    const newTodo = [todo, ...allTodo];
    setAllTodo(newTodo);
  };
  return (
    <div id="app-container">
      <EditForm onCreateTodo={handleCreateTodo} />
      <TodoListPage allTodo={allTodo} />
    </div>
  );
};

export default TodoApp;
