import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControlLabel,
  Checkbox,
  CircularProgress,
  List,
  ListItem,
  ListItemSecondaryAction,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  checked: {
    color: theme.color,
    '&$checked': {
      color: theme.color,
    },
  },
  input: {
    '& label.Mui-focused': {
      color: theme.color,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.color,
    },
  },
}));

export default function TaskList({ tasks, loading, onChange, onAdd }) {
  const [input, setInput] = useState('');
  const classes = useStyles();

  const Task = ({ task }) => (
    <ListItem>
      <FormControlLabel
        control={
          <Checkbox
            color='default'
            checked={task.done}
            onChange={(_, done) => onChange({ id: task.id, done })}
            className={classes.checked}
          />
        }
        label={task.name}
      />
    </ListItem>
  );

  if (loading) {
    return <CircularProgress className={classes.loading} />;
  }

  function handleAdd() {
    onAdd(input);
    setInput('');
  }

  return (
    <List component='div' disablePadding>
      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
      <ListItem>
        <TextField
          className={classes.input}
          label='Add a new task'
          value={input}
          onChange={e => setInput(e.target.value)}
          fullWidth
        />
        <ListItemSecondaryAction>
          <IconButton edge='end' onClick={handleAdd}>
            <AddIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
};

TaskList.defaultProps = {
  tasks: [],
  loading: false,
  onChange: () => {},
  onAdd: () => {},
};
