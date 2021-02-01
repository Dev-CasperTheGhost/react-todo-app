import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { Container, Button } from "@material-ui/core";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function addNewTodo(todo) {
    setTodos((prev) => [...prev, todo]);
    setFilteredTodos((prev) => [...prev, todo]);
  }

  function deleteTodo(id) {
    setFilteredTodos((prev) => prev.splice(id, 1));
    setTodos((prev) => prev.splice(id, 1));
  }

  function markCompleted(id) {
    setFilteredTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
    });
  }

  function reverse() {
    setFilteredTodos((prev) => prev.reverse());
  }

  function filterCompleted() {
    setShowCompleted((o) => !o);
    setFilteredTodos((prev) => prev.filter(Boolean));
  }

  function unFilterCompleted() {
    setFilteredTodos(todos);
  }

  return (
    <div>
      <Container>
        <AddTodo newTodo={addNewTodo} todosLength={filteredTodos.length} />
        <div className="buttons">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            title="delete all the todos from the list"
            onClick={reverse}
          >
            Reverse Order
          </Button>
          {showCompleted ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              title="show all todos"
              onClick={unFilterCompleted}
            >
              Show All
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              title="reverse the order of the todos list"
              onClick={filterCompleted}
            >
              Filter Completed
            </Button>
          )}

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            title="delete all the todos from the list"
            // onClick={this.deleteAll}
          >
            Delete All
          </Button>
        </div>

        {filteredTodos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              index={index}
              todo={todo.value}
              deleteTodo={() => {
                deleteTodo(index);
              }}
              completed={todo.completed}
              markCompleted={() => {
                markCompleted(todo.id);
              }}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
