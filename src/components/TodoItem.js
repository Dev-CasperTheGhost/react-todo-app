import { Card, CardContent, Typography, CardActions, IconButton } from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

function TodoItem({ index, completed, todo, markCompleted, deleteTodo }) {
  return (
    <Card className="margin-top-15">
      <CardContent className="todo-item">
        <Typography
          id="todoEditField"
          variant="h5"
          color={completed ? "primary" : "inherit"}
          component="h2"
          style={completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}
        >
          {todo}
        </Typography>
        <CardActions>
          <IconButton aria-label="settings" onClick={() => deleteTodo(index)}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton aria-label="settings" onClick={() => markCompleted(index)}>
            {completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
