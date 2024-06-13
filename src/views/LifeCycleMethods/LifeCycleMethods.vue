<template>
  <h1>Lifecycle methods</h1>
  <ol>
    <h4>Phase CREATION</h4>
    <li>beforeCreate</li>
    <li>created: Use case-- Make API calls here</li>
    <h4>Phase MOUNTING:</h4>
    <li>beforeMount</li>
    <li>mounted : Use case-- focusing an input element</li>
    <h4>Phase UPDATING</h4>
    <li>beforeUpdate</li>
    <li>updated :</li>
    <h4>Phase UNMOUNTING</h4>
    <li>beforeUnmount</li>
    <li>unmounted : Use case-- cleaning up network tab</li>
    <h4>Phase MISC</h4>
    <li>
      activated: called when &lt; keep-alive &gt; component is activated click
      <router-link to="/dynamic-components/keep-alive">Here</router-link> to
      learn more
    </li>
    <li>deactivated : called when keep alive component is deactivated</li>
    <li>
      errorCaptured: called when any error from any decendent component is
      captured
    </li>
    <li>renderTracked : used for debugging purposes</li>
    <li>renderTriggered : used for debugging purposes</li>
  </ol>
</template>
<script>
export default {};
</script>