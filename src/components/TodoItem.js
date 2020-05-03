import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

class TodoItem extends Component {

  deleteTodo = () => {
    const index = this.props.index;
    this.props.deleteTodo(index);
  };

  markCompleted = () => {
    const todoId = this.props.id;
    this.props.markCompleted(todoId)
  }

  render() {
    return (
      <Card className='margin-top-15'>
        <CardContent>
          <Typography variant='h5' color={this.props.completed  ? "primary": "inherit"} component='h2' style={this.props.completed  ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
            {this.props.todo}
          </Typography>
          <CardActions>
            <IconButton aria-label='settings' onClick={this.deleteTodo}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
            <IconButton aria-label='settings' onClick={this.markCompleted}>
              {
                this.props.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />
              }
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default TodoItem;
