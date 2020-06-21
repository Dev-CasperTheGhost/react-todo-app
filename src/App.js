import React, { Component } from 'react';
import AddTodo from './components/AddTodo'
import { Container, Button } from '@material-ui/core';
import TodoItem from './components/TodoItem';


class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      filteredTodos: [],
      showCompleted: false
    }
  }

  addNewTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
      filteredTodos: [...this.state.filteredTodos, newTodo],
    })
  }

  deleteTodo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({ filteredTodos: this.state.todos, todos: this.state.todos })
  };

  markCompleted = (todoId) => {
    this.setState({
      filteredTodos: this.state.filteredTodos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  reverse = () => {
    this.setState({
      filteredTodos: this.state.filteredTodos.reverse()
    });
  };

  filterCompleted = () => {
    this.setState({
      showCompleted: true,
      filteredTodos: [...this.state.todos].filter((todo) => {
        return todo.completed
      })
    })
  }

  unFilterCompleted = () => {
    this.setState({
      showCompleted: false,
      filteredTodos: this.state.todos
    })
  }

  deleteAll = () => {
    this.setState({
      todos: [],
      filteredTodos: []
    });
  };


  render() {
    return (
      <div>
        <Container>
          <AddTodo newTodo={this.addNewTodo} todos={this.state.todos} />
          <div className="buttons">

          <Button
              fullWidth
              variant="contained"
              color='primary'
              title="delete all the todos from the list"
              onClick={this.reverse}>Reverse Order</Button>
            {
              this.state.showCompleted ? <Button
                fullWidth
                variant="contained"
                color='primary'
                title="show all todos"
                onClick={this.unFilterCompleted}>Show All</Button> :
                <Button
                  fullWidth
                  variant="contained"
                  color='primary'
                  title="reverse the order of the todos list"
                  onClick={this.filterCompleted}>Filter Completed</Button>
            }

            <Button
              fullWidth
              variant="contained"
              color='secondary'
              title="delete all the todos from the list"
              onClick={this.deleteAll}>Delete All</Button>
            
          </div>

          {
            this.state.filteredTodos.map((todo, index) => {
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
      </div>
    );
  }

}

export default App;
