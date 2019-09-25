import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader } from '@material-ui/core/';
import UsersListItem from '../UsersListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UsersList({ users }) {
  const classes = useStyles();

  return (
    <List
      component='div'
      subheader={<ListSubheader component='div'>Users</ListSubheader>}
      className={classes.root}
    >
      {users.map(user => (
        <UsersListItem user={user} key={user.id} />
      ))}
    </List>
  );
}

UsersList.propTypes = {
  users: PropTypes.array,
};

UsersList.defaultProps = {
  users: [],
};
