import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";

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
  getters: getters,
  mutations: mutations,
  actions: {}
});
