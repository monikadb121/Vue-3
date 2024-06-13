<template>
  <h2 class="example" v-bind:class="status ? 'success' : 'error'">
    Class binding
  </h2>
</template>
<script>
export default {
  data() {
    return {
      status: true,
    };
  },
};
</script>
<style scoped>
.example {
  text-decoration: underline;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>