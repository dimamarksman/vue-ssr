import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      { path: "/", component: () => import("../components/Home.vue") },
      { path: "/about", component: () => import("../components/About.vue") },
      {
        path: "/counter",
        component: () => import("../components/Counter.vue")
      },
      { path: "/items/:id", component: () => import("../components/Item.vue") }
    ]
  });
}
