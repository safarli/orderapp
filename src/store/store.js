import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [],
    products: [
      {
        id: 19001,
        text: "Orange",
        value: "orange",
      },
      {
        id: 19002,
        text: "Banana",
        value: "banana",
      },
      {
        id: 19003,
        text: "Pineapple",
        value: "pineapple",
      },
      {
        id: 19004,
        text: "Pear",
        value: "pear",
      },
      {
        id: 19005,
        text: "Mango",
        value: "mango",
      },
    ],
  },
  getters: {
    getName: (state) => {
      return state.fullName;
    },
    getProducts: (state) => {
      return state.products;
    },
    getOrders: (state) => {
      return state.orders;
    },
  },
  mutations: {
    setName: (state, name) => {
      state.fullName = name;
    },
    addOrder: (state, order) => {
      for (let item of order) {
        state.orders.push(item);
      }
    },
  },
  actions: {},
});
