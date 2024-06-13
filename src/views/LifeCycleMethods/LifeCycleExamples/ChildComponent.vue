<template>
  <h3>Child</h3>
</template>
<script>
export default {
  beforeCreate() {
    console.log("Before create Child");
  },
  created() {
    console.log("Created Child");
  },
  beforeMount() {
    console.log("Before mount Child");
  },
  mounted() {
    console.log("Mounted Child");
  },
  beforeUpdate() {
    console.log("Before update Child");
  },
  updated() {
    console.log("updated Child");
  },
  beforeUnmount() {
    console.log("Before unmount child");
  },
  unmounted() {
    console.log("Unmounted child");
  },
};
</script>