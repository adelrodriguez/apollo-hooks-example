export function mapUsers(data) {
  const reducer = (accumulator, value) => {
    if (!value.done) {
      return accumulator + 1;
    }

    return accumulator;
  };

  return data.allUsers.map(user => ({
    id: user.id,
    name: user.name,
    pending: user.Todos.reduce(reducer, 0),
  }));
}

export default {
  mapUsers,
};
