import React from "react";
import StatePanel from "./state-panel/statepanel";
import LabeledDateTimePanel from "./date/LabeledDateTime";

const Todo = ({ todo }) => (
  <React.Fragment key={`div-${todo.id}`}>
    <h2>{todo.text}</h2>
    <dl>
      <StatePanel state={todo.state} />
      <LabeledDateTimePanel label={"Created"} dateTime={todo.dateCreated} />
      <LabeledDateTimePanel label={"Completed"} dateTime={todo.dateCompleted} />
    </dl>
  </React.Fragment>
);

const TodoList = ({ allTodo }) => (
  <ul>
    {allTodo.map((todo) => (
      <li key={`li-${todo.id}`}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
