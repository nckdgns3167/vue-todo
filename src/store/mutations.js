const addTodo = (state, todo) => {
  const obj = { completed: false, todo, addDate: new Date() };
  state.todos.push(obj);
  localStorage.setItem(todo, JSON.stringify(obj));
};

const removeTodo = (state, payload) => {
  state.todos.splice(payload.index, 1);
  localStorage.removeItem(payload.todo);
};

const toggleComplete = (state, payload) => {
  state.todos[payload.index].completed = !state.todos[payload.index].completed;
  localStorage.removeItem(payload.todo);
  localStorage.setItem(payload.todo, JSON.stringify(state.todos[payload.index]));
};

const clearTodo = (state) => {
  state.todos = [];
  localStorage.clear();
};

export { addTodo, removeTodo, toggleComplete, clearTodo };
