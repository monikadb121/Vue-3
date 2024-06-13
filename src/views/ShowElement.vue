<template>
  <h2 v-show="!status">Show element conditionally</h2>
</template>
<script>
export default {
  data() {
    return { status: false };
  },
};
</script>
