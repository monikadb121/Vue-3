<template>
  <div>
    <button @click="increment">+</button>
    <p>Counter value: {{ counter.count }}</p>
    <button @click="decrement">-</button>
    <p>Counter Length: {{ counter.countLength }}</p>
  </div>
</template> 
<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
const { increment, decrement } = counter;
</script>
<script>
export default {};
</script> 