<template>
  <h1>Template ref</h1>
  <input type="text" ref="templateRef" />
  <div ref="divTemplateRef">Ref on div</div>
  <p>Template Refs are used to reference an html dom element</p>
</template>
<script>
export default {
  mounted() {
    this.$refs.templateRef.focus();
    console.log(this.$refs.divTemplateRef, "template ref ex");
  },
};
</script>