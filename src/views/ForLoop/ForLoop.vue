<template>
  <h2 v-for="(user, index) in users" v-bind:key="index">
    {{ user.name }}
  </h2>
</template>
<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "user1" },
        { id: 2, name: "user2" },
        { id: 3, name: "user3" },
      ],
    };
  },
};
</script>
