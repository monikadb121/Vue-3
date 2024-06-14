<template>
  <h1>Ref</h1>
  <h2>Options- {{ o_firstname }}</h2>
  <h2>
    Composition- {{ c_firstname }}, <span>{{ Greet }}</span>
  </h2>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    // used c_ for composition Api
    // ref here is a function which returns object
    const c_firstname = ref("Clark");
    console.log(c_firstname, "c_firstname"); // this is not just the name, its an object containing value of the object.
    const Greet = `Hello ${c_firstname.value}`;
    return {
      c_firstname,
      Greet,
    };
  },
  data() {
    // used o_ for options Api
    return { o_firstname: "Bruce" };
  },
};
</script>