<template>
  <h2 v-bind:id="exmpleId">Test id</h2>
</template>
<script>
export default {
  data() {
    return {
      exmpleId: "idAttributeBinding",
    };
  },
};
</script>
<style scoped>
#idAttributeBinding {
  color: pink;
}
</style>
