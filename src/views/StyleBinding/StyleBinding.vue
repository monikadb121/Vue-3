<template>
  <h2 v-bind:style="{ color: 'orange', 'font-size': fontSize + 'rem' }">
    Inline Style
  </h2>
</template>
<script>
export default {
  data() {
    return { fontSize: 1.2 };
  },
};
</script>