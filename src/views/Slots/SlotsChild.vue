<template>
  <!-- we can use any element or text here above or below slot -->
  <div>
    <h4>Child component with slot</h4>
    <!-- As it does not have any name, it will be default slot -->
    <slot></slot>
  </div>
  <!-- Code snippet for named slots -->
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="contnent">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>