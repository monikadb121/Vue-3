<template>
  <h2
    v-bind:class="{
      disabled: isDisabled,
      success: status,
    }"
  >
    Multiple conditions binding in object format
  </h2>
</template>
<script>
export default {
  data() {
    return { isDisabled: true, status: true };
  },
};
</script>
<style scoped>
.success {
  color: green;
}
.disabled {
  font-style: italic;
}
</style>