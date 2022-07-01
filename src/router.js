import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/elders",
    name: "elders",
    component: () => import("./components/ElderList")
  },
  {
    path: "/elders/:id",
    name: "elder-details",
    component: () => import("./components/Elder")
  },
  {
    path: "/Show",
    name: "Show",
    component: () => import("./components/ShowElder")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddElder")
  } ,


];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
