import React from 'react'
import'./Todo.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material'
function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Deadline" />
      </ListItem>
    </List>
  )
}

export default Todo;
