<template>
  <button @click="goBack">
    <font-awesome-icon icon="fa-solid fa-arrow-left" />
  </button>
  <button @click="goForward">
    <font-awesome-icon icon="fa-solid fa-arrow-right" />
  </button>
  <h1>Post Details</h1>
  <h2>Id: {{ postDetails.id }}</h2>
  <h2>Title: {{ postDetails.title }}</h2>
  <h2>Slug: {{ postDetails.slug }}</h2>
  <h2>UserId: {{ postDetails.userId }}</h2>
  <h2>Status: {{ postDetails.status }}</h2>

</template>
<script>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  data() {
    return {
      route: useRoute(),
      router: useRouter(),
      postDetails: [],
    };
  },
  created() {
    this.getPostDetails();
    console.log(this.route.fullPath, "fullpath");
    console.log(this.route.params, "params");
    console.log(this.route.hash, "hash");
    console.log(this.route.name, "name");
    console.log(this.route.query, "query");
    console.log(this.route.path, "path");

    console.log(this.router, "router");
  },
  methods: {
    getPostDetails() {
      axios
        .get(`https://jsonplaceholder.org/posts/${this.route.params.id}`)
        .then((result) => (this.postDetails = result.data))
        .catch((err) => alert(err));
    },
    goBack() {
      this.router.back();
    },
    goForward() {
      this.router.forward();
    },
  },
};
</script>