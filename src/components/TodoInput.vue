<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus fa-2x addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header" style="color: orange;">WARNING !!!</h3>
      <p slot="body">No spaces allowed.</p>
      <span slot="footer">🤞💕</span>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/AlertModal.vue";

export default {
  data: () => {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      const todo = this.newTodoItem.trim();
      if (todo) {
        this.$emit("addTodo", todo);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  flex: 1;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  width: 3rem;
  border-radius: 0 5px 5px 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
