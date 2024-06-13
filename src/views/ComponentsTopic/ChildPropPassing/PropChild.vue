<template>
  <div>
    <h2>Prop child</h2>
    <div
      :style="{
        border: '1px solid grey',
        padding: '1rem',
        'max-width': '50%',
        margin: 'auto',
      }"
    >
      <h2>Popup</h2>
      <!-- Use this code for closing the popup -->
      <!-- <button @click="$emit('close')">Close popup</button> -->
      <styled-button @click="$emit('close', name)" btnTitle="Close popup" />
    </div>
  </div>
</template>
<script>
import StyledButton from "../../../components/StyledButton.vue";
export default {
  components: { StyledButton },
  data() {
    return { name: "Data passing from child to parent" };
  },
  emits: ["close"],
};
</script>