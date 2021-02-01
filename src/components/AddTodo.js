import { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

function AddTodo({ newTodo, todosLength }) {
  const [todo, setTodo] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    newTodo({
      id: todosLength + 1,
      value: todo,
      completed: false,
    });
  }

  return (
    <form onSubmit={onSubmit} className="margin-top-15 add-todo-form">
      <FormControl fullWidth>
        <InputLabel>What Are Going Todo</InputLabel>
        <Input id="todo" value={todo} onChange={(e) => setTodo(e.currentTarget.value)} required />
      </FormControl>
      <Button variant="contained" color="primary" size="medium" type="submit">
        Add Todo
      </Button>
    </form>
  );
}

export default AddTodo;
