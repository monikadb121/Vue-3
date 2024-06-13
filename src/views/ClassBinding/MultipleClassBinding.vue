<template>
  <h2 v-bind:class="status ? ['success', 'example'] : 'error'">
    Multiple class binding
  </h2>
</template>
<script>
export default {
  data() {
    return { status: true };
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