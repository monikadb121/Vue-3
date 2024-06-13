<template>
  <h2
    v-bind:class="[
      isDisabled && 'disabled',
      status ? ['success', 'example'] : 'error',
    ]"
  >
    Multiple conditions binding
  </h2>
</template>
<script>
export default {
  data() {
    return { isDisabled: true };
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
.disabled {
  font-style: italic;
}
</style>