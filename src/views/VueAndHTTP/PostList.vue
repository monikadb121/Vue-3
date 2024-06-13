<template>
  <h1>Get request</h1>
  <table v-if="posts.length" :style="{ margin: 'auto' }">
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Slug</th>
      <th>User Id</th>
      <th>Status</th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.slug }}</td>
      <td>{{ post.userId }}</td>
      <td>{{ post.status }}</td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  // Api called on page load
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get("https://jsonplaceholder.org/posts")
        .then((result) => (this.posts = result.data))
        .catch((err) => alert(err));
    },
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
  
}
</style>