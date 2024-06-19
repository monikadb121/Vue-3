<template>
  <h2 v-html="exampleHtml"></h2>
  <!-- This page is getting redirected from main.js file as an example of redirection -->
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
