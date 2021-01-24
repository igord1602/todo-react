import React from "react";
import TodoForm from "./todo-form/todo-form";

const FormPanel = (props) => (
  <div className="edit-form-container">
    <h1>Create TODO</h1>
    <div className="editor-form">
      <TodoForm onCreateTodo={props.onCreateTodo} />
    </div>
  </div>
);

export default FormPanel;
