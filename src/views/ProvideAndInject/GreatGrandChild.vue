<template>
  <h4>Great Grand Child Component</h4>
  <b :style="{ border: '1px solid grey' }"
    >Data from great grand child component D: {{ username }}</b
  >
</template>
<script>
export default {
  inject: ["username"],
};
</script>