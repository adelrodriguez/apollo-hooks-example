import { useMutation } from '@apollo/react-hooks';
import { FETCH_USER_TODOS } from '../graphql/queries';
import { CREATE_TODO } from '../graphql/mutations';

export default function(userId) {
  function update(cache, { data: { createTodo } }) {
    const options = {
      query: FETCH_USER_TODOS,
      variables: { id: userId },
    };

    const { allTodos } = cache.readQuery(options);

    cache.writeQuery({
      ...options,
      data: { allTodos: [...allTodos, createTodo] },
    });
  }

  const [createTodo] = useMutation(CREATE_TODO, {
    update,
  });

  return createTodo;
}
