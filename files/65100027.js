import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount("#app");
});

import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
