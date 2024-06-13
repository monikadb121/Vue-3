<template>
  <h2>Child Component</h2>
  <grand-child-comp />
</template>
<script>
import GrandChildComp from "./GrandChildComp.vue";
export default {
  components: { GrandChildComp },
};
</script>