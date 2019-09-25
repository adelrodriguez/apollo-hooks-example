import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_USERS } from '../../graphql/queries';
import { mapUsers } from './mapping';
import UsersList from './UsersList';

export default function() {
  const { data, loading, error } = useQuery(FETCH_USERS);

  if (loading || error) {
    return null;
  }

  return <UsersList users={mapUsers(data)} />;
}
