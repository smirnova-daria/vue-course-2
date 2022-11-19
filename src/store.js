import { createStore } from "vuex";

const store = createStore({
  state() {
    return { counter: 0 };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit("increase", payload);
      }, 2000);
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});

export default store;
