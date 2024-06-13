<template>
  <h1>Provide and inject</h1>
  <div>
    <p :style="{ 'max-width': '50%', margin: 'auto' }">
      Provide and inject are basically way to avoid prop drilling. If we have a
      prop in component A, and we need to access it inside component D which is
      nested inside C which is nested inside B and further is nested inside A.
      <br />Consider-> comp A | comp B | comp C | comp D <br />
      To solve this problem, provide and inject come into picture, we can
      directly pass the required data inside provide function in parent
      component and access it inside inject function in the grandchild or great
      grandchild or any nested heirarchy.
    </p>
    <br />
    <b :style="{ border: '1px solid grey' }"
      >Data from Parent A element: {{ name }}</b
    >
    <child-comp />
  </div>
</template>
<script>
import ChildComp from "./ChildComp.vue";
export default {
  components: { ChildComp },
  data() {
    return { name: "My name is Khan" };
  },
  provide() {
    return { username: this.name };
  },
};
</script>