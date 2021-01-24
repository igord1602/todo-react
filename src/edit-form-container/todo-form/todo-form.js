import React, { useState } from "react";

const TodoForm = (props) => {
  const [todoDescription, setTodoDescription] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      text: todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: 66 + count,
    };
    setCount(count + 1);
    setTodoDescription("");
    props.onCreateTodo(todo);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-row-left">
        <input
          id="todo-text"
          placeholder="Enter text"
          type="text"
          name="todo-description"
          value={todoDescription}
          onChange={(event) => setTodoDescription(event.target.value)}
        />
      </div>

      <div className="form-row-right">
        <input id="add-todo-button" type="submit" value="Add" />
        <input
          id="clear-form-button"
          type="button"
          value="Clear"
          onClick={() => setTodoDescription("")}
        />
      </div>
    </form>
  );
};

export default TodoForm;
