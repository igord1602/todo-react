import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./App";
import todos from "./todo-storage/todos";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp allTodo={todos} />
  </React.StrictMode>,
  document.getElementById("root")
);
