<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- 구조분해할당 문법 적용 -->
      <li v-for="({ completed, todo }, index) in this.getTodos" v-bind:key="index" class="shadow">
        <i
          class="fa-solid fa-check checkBtn"
          v-bind:class="{ checkBtnCompleted: completed }"
          v-on:click="toggleComplete({todo, index})"
        ></i>
        <span v-bind:class="{ textCompleted: completed }">{{ todo }}</span>
        <i class="fa-solid fa-trash-can removeBtn" v-on:click="removeTodo({todo, index})"></i>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations(["removeTodo", "toggleComplete"]), // payload는 암묵적으로 보내짐.
    // removeTodo(todo, index) {
    //   // this.$emit("removeTodo", todo, index);
    //   this.$store.commit("removeTodo", { todo, index });
    // },
    // toggleComplete(todo, index) {
    //   // this.$emit("toggleComplete", todo, index);
    //   this.$store.commit("toggleComplete", { todo, index });
    // }
  },
  computed: {
    ...mapGetters(["getTodos"])
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  align-items: center !important;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* 리스트 아이템 트렌지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
