<template>
  <h2>{{ exampleName }}</h2>
  :
  <h2 v-pre>{{}}</h2>
</template>
<script>
export default {
  data() {
    return { exampleName: "Mustache Syntax" };
  },
};
</script>
