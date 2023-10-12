import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import router from "./router";
import App from "./App.vue";

import "./assets/scss/style.scss";

Vue.use(PiniaVuePlugin);

new Vue({
  pinia: createPinia(),
  router,
  render: (h) => h(App),
}).$mount("#app");
