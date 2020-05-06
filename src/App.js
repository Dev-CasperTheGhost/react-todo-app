import React, { Component } from 'react';
import AddTodo from './components/AddTodo'
import { Container, Button } from '@material-ui/core';
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
      todos: [...this.state.todos, newTodo]
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

  filter = () => {
    this.setState({
      todos: this.state.todos.reverse()
    });
  };

  deleteAll = () => {
    this.setState({
      todos: []
    });
  }


  render() {
    return (
      <Container>
        <AddTodo newTodo={this.addNewTodo} todos={this.state.todos} />
        <div className="buttons">
          <Button
            fullWidth
            variant="contained"
            color='primary'
            title="reverse the order of the todos list"
            onClick={this.filter}>Reverse Order</Button>
          <Button
            fullWidth
            variant="contained"
            color='secondary'
            title="delete all the todos from the list"
            onClick={this.deleteAll}>Delete All</Button>
        </div>

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
