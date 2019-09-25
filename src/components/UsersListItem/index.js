import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_USERS } from '../../graphql/queries';
import { REMOVE_USER } from '../../graphql/mutations';
import UsersListItem from './UsersListItem';

export default function ({ user }) {
  function update(cache) {
    const { allUsers } = cache.readQuery({ query: FETCH_USERS });

    cache.writeQuery({
      query: FETCH_USERS,
      data: { allUsers: allUsers.filter(u => u.id !== user.id) },
    });
  }

  const [removeUser] = useMutation(REMOVE_USER, {
    variables: { id: user.id },
    update,
  });

  return (
    <UsersListItem
      user={user}
      onRemove={removeUser}
    />
  );
}