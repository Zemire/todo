import { defineStore } from "pinia";
import requestService from "../utils/request.js";
import router from "../router/index.js";
import { getFromStorage } from "../utils/localStorageHelperFunction";

const LOGIN_DATA = "login-data";

export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    userLogin: {
      username: null,
      phoneNumber: null,
    },
    showLoginError: false,
    userData: getFromStorage(LOGIN_DATA),
    users: null,
  }),
  getters: {},
  actions: {
    async loginUser(userLoginObj) {
      this.showLoginError = false;
      if (!this.users) {
        try {
          const response = await requestService.get("/users");
          this.users = response.data;
        } catch (error) {
          console.error(error);
        }
      }
      const keys = Object.keys(userLoginObj);
      const user = this.users.filter((item) =>
        keys.every((key) => item[key] === userLoginObj[key])
      );
      if (user.length > 0) {
        this.userData = user[0];
        localStorage.setItem(LOGIN_DATA, JSON.stringify(this.userData));

        router.push({ name: "home" });
      } else {
        this.showLoginError = true;
      }
    },
    logoutUser() {
      this.userData = null;
      localStorage.removeItem(LOGIN_DATA);
      if (router.history.current.path !== "/") {
        router.push({ name: "login" });
      }
    },
  },
});
