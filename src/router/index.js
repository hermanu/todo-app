import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/views/List.vue";
import About from "@/components/views/About.vue";
import Home from "@/components/views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
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
