<template>
  <h1>Parent</h1>
  <styled-button @click="showChild = !showChild" btnTitle="Show Child" />
  <child-component v-if="showChild" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
import StyledButton from "../../../components/StyledButton.vue";
export default {
  data() {
    return { showChild: false };
  },
  components: {
    ChildComponent,
    StyledButton,
  },
  beforeCreate() {
    console.log("Before create Parent");
  },
  created() {
    console.log("Created Parent");
  },
  beforeMount() {
    console.log("Before mount Parent");
  },
  mounted() {
    console.log("Mounted Parent");
  },
  beforeUpdate() {
    console.log("Before update Parent");
  },
  updated() {
    console.log("updated Parent");
  },
  beforeUnmount() {
    console.log("Before unmount Parent");
  },
  unmounted() {
    console.log("Unmounted Parent");
  },
};
</script>