import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Collapse,
  Avatar,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '../Alert';
import TaskList from '../TaskList';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
});

export default function UsersListItem({ user, onRemove }) {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(true);
  const [open, setOpen] = useState(false);

  async function handleRemove() {
    setOpen(false);
    onRemove();
  }

  return (
    <>
      <ListItem button onClick={() => setCollapse(!collapse)}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{user.name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.name} secondary={`Pending: ${user.pending}`} />
        <ListItemSecondaryAction>
          <IconButton edge='end' onClick={() => setOpen(true)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={!collapse} timeout='auto' unmountOnExit>
        <TaskList user={user} />
      </Collapse>
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        onAction={handleRemove}
        title='Remove user'
        text={`Are you sure you want to remove the user "${user.name}"?`}
        primaryActionText='Remove'
      />
    </>
  );
}

UsersListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onRemove: PropTypes.func,
};

UsersListItem.defaultProps = {
  user: {
    id: 0,
    name: '',
  },
  onRemove: () => {},
};
