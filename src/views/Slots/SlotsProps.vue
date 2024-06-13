<template>
  <h1>Slots props</h1>
  <h3 v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>
<script>
export default {
  data() {
    return {
      names: [
        { firstName: "Bruce", lastName: "Wayne" },
        { firstName: "Princess", lastName: "Diana" },
      ],
    };
  },
};
</script>