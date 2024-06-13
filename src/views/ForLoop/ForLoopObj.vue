<template>
  <h2 v-for="(key, val) in myInfo" :key="val">{{ key }} : {{ val }}</h2>
</template>
<script>
export default {
  data() {
    return {
      myInfo: {
        name: "Test",
        learning: "Vue 3",
      },
    };
  },
};
</script>
