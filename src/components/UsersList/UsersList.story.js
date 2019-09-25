import React from 'react';
import UsersList from './UsersList';
import withMockedProvider from '../../utils/graphql/withMockedProvider';

const users = [{ id: '0', name: 'Lorem Ipsum', pending: 0 }];

export const withoutUsers = () => withMockedProvider(<UsersList />, []);

export const withUsers = () => withMockedProvider(<UsersList users={users} />, []);

export default { title: 'Users/UsersList' };
