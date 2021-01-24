import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.count = 1;

    this.state = { todoDescription: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({ todoDescription: event.target.value });
  }

  handleClear(event) {
    this.setState({ todoDescription: "" });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ todoDescription: "" });
    const nextId = 67 + this.count++;
    const todo = {
      text: this.state.todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: nextId,
    };
    this.props.onCreateTodo(todo);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row-left">
          <input
            id="todo-text"
            placeholder="Enter text"
            type="text"
            name="todo-description"
            value={this.state.todoDescription}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-row-right">
          <input id="add-todo-button" type="submit" value="Add" />
          <input
            id="clear-form-button"
            type="button"
            value="Clear"
            onClick={this.handleClear}
          />
        </div>
      </form>
    );
  }
}

export default TodoForm;
