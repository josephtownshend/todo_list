import React from 'react';

export default class TodoForm extends React.Component {

  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <input
        name="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="todo..."
      />
    );
  }
}
