<template>
  <h1>Component usage</h1>
  <child-component-and-props :dataName="dataName" name="example" />
  <h4>
    Convienence usage for components in Vue is kebab casing. in react we write
    <span v-pre>" &lt;ComponentTopic /&gt; "</span> in Vue we write
    <span v-pre>"&lt;component-topic /&gt;"</span>. However both ways are
    correct and accepted but latter one is more preferred
  </h4>
</template>
<script>
import ChildComponentAndProps from "../../components/ChildComponentAndProps.vue";
export default {
  data() {
    return { dataName: "My name is child component prop" };
  },
  components: { ChildComponentAndProps },
};
</script>
