<template>
  <button>{{ btnTitle }}</button>
</template>
<script>
export default {
  props: ["btnTitle"],
};
</script>
<style scoped>
button {
  background: #492c68b5;
  color: #fff;
  border: none;
  padding: 0.8rem 1.3rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}
:disabled {
  opacity: 0.5;
}
</style>