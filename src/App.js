import React, { Component } from 'react';
import AddTodo from './components/AddTodo'
import { Container } from '@material-ui/core';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
  }

  addNewTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  deleteTodo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({ todos: this.state.todos })
  };

  markCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }


  render() {
    return (
      <Container maxWidth="lg">
        <AddTodo newTodo={this.addNewTodo} todos={this.state.todos} />
        {
          this.state.todos.map((todo, index) => {
            return <TodoItem
              key={todo.id}
              index={index}
              todo={todo.value}
              deleteTodo={() => { this.deleteTodo(index) }}
              completed={todo.completed}
              markCompleted={() => { this.markCompleted(todo.id) }} />
          })
        }
      </Container>
    );
  }

}

export default App;
