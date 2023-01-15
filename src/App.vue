<template>
  <!-- 컨테이너 컴포넌트 -->
  <div id="app">
    <!-- 프레젠테이셔널 컴포넌트 -->
    <TodoHeader />
    <TodoInput v-on:addTodo="addTodo" />
    <TodoList
      v-bind:todos="todos"
      v-on:removeTodo="removeTodo"
      v-on:toggleComplete="toggleComplete"
    />
    <TodoFooter v-on:clearTodo="clearTodo"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todos: [], // 데이터가 한 곳에서 관리됨.
    };
  },
  methods: {
    addTodo(todo) {
      const obj = { completed: false, todo, addDate: new Date() };
      this.todos.push(obj);
      localStorage.setItem(todo, JSON.stringify(obj));
    },
    removeTodo(todo, index) {
      this.todos.splice(index, 1);
      localStorage.removeItem(todo);
    },
    toggleComplete(todo, index) {
      this.todos[index].completed = !this.todos[index].completed;
      localStorage.removeItem(todo);
      localStorage.setItem(todo, JSON.stringify(this.todos[index]));
    },
    clearTodo() {
      this.todos = [];
      localStorage.clear();
    }
  },
  created() {
    // console.log(localStorage)

    // for (let item in localStorage) {
    //   console.log(item);
    // }

    // for(let [key, value] of Object.entries(localStorage)) {
    //   console.log(key)
    //   console.log(value)
    // }c
    const localStorageItems = Object.values(localStorage).map((x) =>
      JSON.parse(x)
    );
    localStorageItems.sort((a, b) => (a.addDate > b.addDate ? 1 : -1));
    for (let item of localStorageItems) {
      this.todos.push(item);
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
