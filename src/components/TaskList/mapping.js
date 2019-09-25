export function mapTasks(data) {
  if (!data) {
    return [];
  }

  return data.allTodos.map(task => ({
    id: task.id,
    name: task.task,
    done: task.done,
  }));
}

export default {
  mapTasks,
};
