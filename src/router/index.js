import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ColorDemo from "../views/ColorDemo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/color-demo",
    name: "color-demo",
    component: ColorDemo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
