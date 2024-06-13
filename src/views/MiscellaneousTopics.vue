<template>
  <div>
    <h1>Shorthand properties</h1>
    <!-- Shorthand for v-bind:property. :property="" we can remove v-bind from all the places -->
    <h2 :style="{ color: 'brown' }">Shorthand for v-bind:property="name"</h2>
    <button :click="console.log(':click')">
      Shorthand for v-bind:click=""
    </button>
    <button @click="console.log('@click')">
      Shorthand for v-bind:click="" way2
    </button>
    <!-- v-pre directive -->

    <h1>V-pre directive:</h1>
    <p>
      used to tell Vue to skip compilation for this element and all its
      children:
    </p>
    <p v-pre>Syntax: '{{}}'</p>

    <h1>Component style</h1>
    <div>
      <p>
        If both the child and parent comp have specified a global style, (style
        without scoped), the parent style will be applied to both components
      </p>
      <p>
        If a parent component is scoped, but no style provided for child
        component, it will still catch the parent's style
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
