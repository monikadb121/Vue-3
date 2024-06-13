<template>
  <h1>Child to parent</h1>
  <button @click="showPopup = true">Show popup</button>
  <!-- @close is a custom event, close is used inside the child component -->
  <!-- Use this code for closing the popup -->
  <!-- <prop-child v-show="showPopup" @close="showPopup = false" /> -->
  <prop-child v-show="showPopup" @close="closeEvent" />
</template>
<script>
import PropChild from "./ChildPropPassing/PropChild.vue";
export default {
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    closeEvent(name) {
      alert(name);
      this.showPopup = false;
    },
  },
  components: {
    PropChild,
  },
};
</script>