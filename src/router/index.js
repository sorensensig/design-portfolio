import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/e-mories",
    name: "E-mories",
    component: () => import("../views/Emories.vue")
  },
  {
    path: "/ve-spand",
    name: "VE-SpaND",
    component: () => import("../views/Vespand.vue")
  },
  {
    path: "/hidden-gems",
    name: "Hidden Gems",
    component: () => import("../views/HiddenGems.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
