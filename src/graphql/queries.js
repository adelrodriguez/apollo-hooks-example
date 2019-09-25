import { gql } from 'apollo-boost';

export const FETCH_USERS = gql`
  query FetchUsers {
    allUsers {
      id
      name
      Todos {
        done
      }
    }
  }
`;

export const FETCH_USER_TODOS = gql`
  query FetchUserTodos($id: ID!) {
    allTodos(filter: { user_id: $id }) {
      id
      task
      done
    }
  }
`;

export default {
  // User queries
  FETCH_USERS,
  // Todos queries
  FETCH_USER_TODOS,
};

