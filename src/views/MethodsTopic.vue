<template>
  <h3>Addition: {{ add(1, 2, 3.2) }}</h3>
  <h3>{{ add(arg?.[0], arg?.[1], arg?.[2]) }}</h3>
  Do not use arrow functions inside methods as they do not have their own this
  keyword
</template>
<script>
export default {
  data() {
    return { arg: [2, 3, 5] };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
  },
};
</script>
