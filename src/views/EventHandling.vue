<template>
  <!-- Event handling -->
  {{ name }}
  <!-- both the ways below are correct for version 3 or above, however @click does not work on vue version 2 -->
  <button v-on:click="name = 'updated'">Update name</button>
  <button @click="name = 'updated'">Update name</button>
  <!-- any event can be handled in this manner -->
  <button v-on:mouseover="name = 'updated'">Update name</button>
  <!-- Basic count increment decrement example of event handling -->
  <h2>Count: {{ count }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <!-- for handling values through event such as accessing event.target.value -->
  <button @click="accessEvent($event)">click</button>
  <!-- multiple event handlers -->
  <button @click="consoleMe(), accessEvent($event)">Multiple event</button>
</template>
<script>
export default {
  data() {
    return {
      name: "Existing",
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    consoleMe() {
      console.log("multiple event handlers");
    },
    accessEvent(event) {
      console.log(event, "event");
      return this.count--;
    },
  },
};
</script>
