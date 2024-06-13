<template>
  <h1>Component topic 2</h1>
  <prop-types
    title="Article"
    :likes="50"
    :isPublished="false"
    id="my-test-article"
  />
  <!-- The number 50 is treated as a string by Js, to make it a number, we need to bind it. Used shorthand here. same case with ispublished -->
</template>
<script>
import PropTypes from "../../components/PropTypes.vue";
export default {
  components: { PropTypes },
};
</script>
