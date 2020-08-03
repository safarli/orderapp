import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Contact.vue";
import Orders from "../components/Orders.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
      path: "/orders",
      name: "orders",
      component: Orders
  }
];

export default new VueRouter({
  mode: "history",
  routes,
});
