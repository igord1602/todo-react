import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//const element = (
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Curret time:</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </React.Fragment>
    );
  }
}

function Editformcontainer() {
  return (
    <div className="edit-form-container">
      <h1>Create TODO</h1>
      <div className="editor-form">
        <form>
          <div className="form-row-left">
            <input id="todo-text" placeholder="Enter text"></input>
          </div>
          <div className="form-row-right">
            <button id="add-todo-button">Add</button>
            <button id="clear-form-button">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const Todolistcontainer = () => (
  <div className="todo-list-container">
    <h1>My ToDos</h1>
    <h2>
      <span id="total-counter-text">Total Todo Count:</span>
      <span id="total-counter-numbers">0</span>
    </h2>
    <div className="list-filter-container">
      <a id="stat-link" href=" ">
        Show statistics
      </a>
    </div>
    <div className="todo-list">
      <div className="empty-list">Nothing to do</div>
    </div>
  </div>
);

const Element = (props) => (
  <div id="app-container">
    <React.Fragment>
      <Editformcontainer />
    </React.Fragment>
    <React.Fragment>
      <Todolistcontainer />
    </React.Fragment>
    <span>
      <Clock />
    </span>
  </div>
);

ReactDOM.render(<Element />, document.getElementById("root"));
