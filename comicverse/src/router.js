import Vue from "vue";
import Router from "vue-router";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import InitialView from "./views/InitialView.vue";
import ComicHomeView from "./views/ComicHomeView.vue";
import HeroHomeView from "./views/HeroHomeView.vue";
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
      path: "/",
      name: "initial",
      component: InitialView
    },
    {
      path: "/comics/:id",
      name: "comics",
      component: ComicView
    },
    {
      path: "/heroes/:id",
      name: "heroesID",
      component: HeroView
    },
    {
      path: "/comics",
      name: "comics",
      component: ComicHomeView
    },
    {
      path: "/heroes",
      name: "heroes",
      component: HeroHomeView
    }
  ]
});
