import { defineStore } from "pinia";
import axios from "axios";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: [],
  }),
  actions: {
    async getComments() {
      try {
        const result = await axios.get('https://jsonplaceholder.org/comments');
        this.comments = result.data;
      } catch (err) {
        alert(err);
      }
    },
  },
});