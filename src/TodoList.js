import React, { Component } from "react";

export default class src extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          onChange={this.handleInputChange}
          value={this.state.newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>A dicionar</button>
      </div>
    );
  }
}