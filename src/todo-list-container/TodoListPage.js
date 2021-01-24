import React from "react";
import StatisticsList from "./Statistics/statistics";
import EmptyList from "./TodoListItem/empty-list/emptylist";
import TodoList from "./TodoListItem/todo-list/todolist";
import todos from "../todo-storage/todos";

const TodoListPage = (allTodo) => (
  <div className="todo-list-container">
    <h1>My ToDos</h1>
    <h2>
      <span id="total-counter-text">Total Todo Count:</span>
      <span id="total-counter-numbers">0</span>
    </h2>

    <StatisticsList />
    <div className="todo-list">
      <EmptyList />
      <div>
        <h1>Thing to do:</h1>
        <TodoList allTodo={todos} />
      </div>
    </div>
  </div>
);

export default TodoListPage;
