<template>
  <div>
    <div v-if="status">Status is true</div>
    <div v-else-if="fontSize >= 50">Font size is less than 50</div>
    <div v-else>Status is false</div>
  </div>
</template>
<script>
export default {
  data() {
    return { status: false, fontSize: 50 };
  },
};
</script>
