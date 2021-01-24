import React from "react";
import "./App.css";
import EditForm from "./edit-form-container/EditForm";
import TodoListPage from "./todo-list-container/TodoListPage";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: props.allTodo };
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }

  handleCreateTodo(todo) {
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos });
    //console.log(`Handler create todo ${todo}`);
  }

  render() {
    const { todos } = this.state;
    return (
      <div id="app-container">
        <EditForm onCreateTodo={this.handleCreateTodo} />
        <TodoListPage allTodo={todos} />
      </div>
    );
  }
}

export default TodoApp;
