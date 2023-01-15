import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    // console.log(localStorage)

    // for (let item in localStorage) {
    //   console.log(item);
    // }

    // for(let [key, value] of Object.entries(localStorage)) {
    //   console.log(key)
    //   console.log(value)
    // }
    const tempArr = [];
    const localStorageItems = Object.values(localStorage).map((x) => JSON.parse(x));
    localStorageItems.sort((a, b) => (a.addDate > b.addDate ? 1 : -1));
    for (let item of localStorageItems) {
      tempArr.push(item);
    }
    return tempArr;
  },
};

export const store = new Vuex.Store({
  state: {
    todos: storage.fetch(),
  },
  mutations: {
    addTodo(state, todo) {
      const obj = { completed: false, todo, addDate: new Date() };
      state.todos.push(obj);
      localStorage.setItem(todo, JSON.stringify(obj));
    },
    removeTodo(state, payload) {
      state.todos.splice(payload.index, 1);
      localStorage.removeItem(payload.todo);
    },
    toggleComplete(state, payload) {
      state.todos[payload.index].completed = !state.todos[payload.index].completed;
      localStorage.removeItem(payload.todo);
      localStorage.setItem(payload.todo, JSON.stringify(state.todos[payload.index]));
    },
    clearTodo(state) {
      state.todos = [];
      localStorage.clear();
    },
  },
});
