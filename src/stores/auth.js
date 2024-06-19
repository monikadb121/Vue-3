import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),
  getters: {
    fullname: (state) => `${state.user.first_name} ${state.user.last_name}`,
  },
  actions: {
    async login() {
      const res = await fetch("https://reqres.in/api/users/2");
      const { data } = await res.json();
      this.user = data;
      this.isAuthenticated = true;
      console.log(this.user, "user");
    },
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
  },
});
