<template>
  <slots-child
    ><template v-slot:header><h3>Named Slot header</h3></template
    ><template v-slot:content><h3>Named Slot content</h3> </template>
    <template v-slot:footer><h3>Named Slot footer</h3></template>
    <template v-slot:default><h3>Default</h3></template></slots-child
  >
</template>
<script>
import SlotsChild from "./SlotsChild.vue";
export default {
  components: { SlotsChild },
};
</script>