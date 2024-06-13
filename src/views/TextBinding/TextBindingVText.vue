<template>
  <h2 v-text="exampleName"></h2>
  <span
    >Can't write anything inside the h2 element as v-text will override it
  </span>
</template>
<script>
export default {
  data() {
    return { exampleName: "V-text Text binding" };
  },
};
</script>
