<template>
  <div>
    <h4><router-link to="/users/4/profile"> Profile </router-link></h4>
    <h4><router-link to="/users/posts"> Posts </router-link></h4>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgb(151, 219, 219);
}
</style>