import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const LOGIN_DATA = "login-data";
  const isAuthenticated = localStorage.getItem(LOGIN_DATA);
  if (!isAuthenticated && to.name !== "login") {
    router.push({ name: "login" });
  } else {
    next();
  }
});

export default router;
