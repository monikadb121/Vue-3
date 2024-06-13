<template>
  <h2 v-bind:style="inlineStyleobject">Inline Style object</h2>
</template>
<script>
export default {
  data() {
    return {
      inlineStyleobject: {
        color: "orange",
        "font-size": 50 + "px",
        padding: "0.5rem",
      },
    };
  },
};
</script>
