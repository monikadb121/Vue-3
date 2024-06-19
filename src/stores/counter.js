import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: { 
    countLength: (state) => state.count.toString().length,
  },
  actions: {
    increment() {
      const authStore = useAuthStore();
      //   if user is not authenticated, disallow increment
      if (!authStore.isAuthenticated) return;
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
