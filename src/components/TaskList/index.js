import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FETCH_USER_TODOS, FETCH_USER } from '../../graphql/queries';
import { UPDATE_TODO } from '../../graphql/mutations';
import { useCreateTodo } from '../../hooks';
import { mapTasks } from './mapping';
import TaskList from './TaskList';

export default function({ user }) {
  const { data, loading } = useQuery(FETCH_USER_TODOS, {
    variables: { id: user.id },
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: FETCH_USER, variables: { id: user.id } }],
  });
  const createTodo = useCreateTodo(user.id);

  return (
    <TaskList
      tasks={mapTasks(data)}
      loading={loading}
      onChange={variables => updateTodo({ variables })}
      onAdd={task =>
        createTodo({
          variables: {
            id: Date.now(),
            task,
            done: false,
            userId: user.id,
          },
        })
      }
    />
  );
}
