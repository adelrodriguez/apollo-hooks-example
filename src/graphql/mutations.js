import { gql } from 'apollo-boost';

export const REMOVE_USER = gql`
  mutation RemoveUser($id: ID!) {
    removeUser(id: $id)
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo(
    $id: ID!
    $userId: ID!
    $task: String!
    $done: Boolean!
  ) {
    createTodo(
      id: $id
      task: $task
      done: $done
      user_id: $userId
    ) {
      id
      task
      done      
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $done: Boolean) {
    updateTodo(id: $id, done: $done) {
      id
      task
      done
    }
  }
`;

export default {
  // User mutations
  REMOVE_USER,
  // Todos mutations
  CREATE_TODO,
  UPDATE_TODO,
};
