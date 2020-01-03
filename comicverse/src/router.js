import Vue from "vue";
import Router from "vue-router";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import InitialView from "./views/InitialView.vue";
import HomeView from "./views/HomeView.vue";
import ComicView from "./views/ComicView.vue";
import HeroView from "./views/HeroView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView
    },
    {
      path: "/initial",
      name: "initial",
      component: InitialView
    },
    {
      path: "/",
      name: "comic",
      component: ComicView
    },
    {
      path: "/hero/:id",
      name: "hero",
      component: HeroView
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    }
  ]
});
