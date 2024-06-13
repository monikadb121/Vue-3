<template>
  <h2 v-html="exampleHtml"></h2>
</template>
<script>
export default {
  data() {
    return {
      exampleHtml: "<b>Html attributes binding</b>",
    };
  },
};
</script>
