<template>
  <h3>Grand Child Component</h3>
  <great-grand-child />
</template>
<script>
import GreatGrandChild from "./GreatGrandChild.vue";
export default {
  components: { GreatGrandChild },
};
</script>