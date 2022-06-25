import { defineStore } from "pinia";
import { getInfoByCode, login } from "../composables/auth";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      token: "",
      role: "student",
      account_id: "",
      username: "",
    };
  },
  getters: {
    getToken: (state) => state.token,
    getAccountId: (state) => state.account_id,
    getRole: (state) => state.role,
  },
  actions: {
    async login(loginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm)
          .then((resp) => {
            this.token = resp.token;
            this.account_id = resp.account_id;
            this.role = resp.roles[0];
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    async getInfoByCode(code) {
      return new Promise((resolve, reject) => {
        getInfoByCode(code)
          .then((response) => {
            const needBind = response.need_bind;
            if (needBind) {
              resolve(response);
            } else {
              const { username, account_id, roles } = response.account_info;
              this.username = username;
              this.account_id = account_id;
              this.role = roles[0];
              this.token = response.token;
              resolve(response);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
