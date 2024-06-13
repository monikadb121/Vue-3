<template>
  <styled-button v-bind:disabled="isDisabled" btnTitle="Button" />
</template>
<script>
import StyledButton from "../../components/StyledButton.vue";
export default {
  components: { StyledButton },
  data() {
    return {
      isDisabled: true,
    };
  },
};
</script>
