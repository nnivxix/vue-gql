import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./pages/HomePage.vue") },
  { path: "/user/:id", component: () => import("./pages/UserId.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
