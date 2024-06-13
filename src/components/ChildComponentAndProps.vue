<template>
  <h3>I am child component</h3>
  <h4>Props in practise: {{ name }}</h4>
  <h4>{{ dataName }}</h4>
</template>
<script>
export default {
  props: ["name", "dataName"],
};
</script>