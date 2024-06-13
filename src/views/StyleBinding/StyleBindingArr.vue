<template>
  <h2 v-bind:style="[inlineStyleobject, inlineStyleobjectDuplicate]">
    Inline Style object in Array
  </h2>
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
      inlineStyleobjectDuplicate: {
        "font-style": "italic",
        padding: "1rem",
      },
    };
  },
};
</script>
