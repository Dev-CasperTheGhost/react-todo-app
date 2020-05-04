import React, { Component } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      todosLength: 0,
      todoItem: {
        id: 0,
        value: '',
        completed: false,
      },
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const todoItem = this.state.todoItem;
    this.props.newTodo(todoItem);

    this.setState({
      todoItem: {
        value: "",
      },
    });
  };

  handleTodoValue = (event) => {
    const todoId = this.props.todos.length + 1;
    this.setState({
      todoItem: {
        //   Set the ID
        id: todoId,
        // Set the value
        value: event.target.value,
        completed: false,
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='margin-top-15'>
        <FormControl fullWidth>
          <InputLabel>What Are Going Todo</InputLabel>
          <Input
            id='todo'
            value={this.state.todoItem.value}
            onChange={this.handleTodoValue}
            required
          />
        </FormControl>
      </form>
    );
  }
}

export default AddTodo;
