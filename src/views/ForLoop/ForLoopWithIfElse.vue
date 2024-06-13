<template>
  <div v-for="(actor, index) in actors" v-bind:key="index">
    <h2 v-if="actor.name === 'Di Caprio'">{{ actor.name }}</h2>
    <h2 v-else>{{ actor.currentlyWorking }}</h2>
  </div>
  Conditional listing with for loop and without if else
  <div v-for="(actor, index) in actors" v-bind:key="index">
    {{ actor.name === "Di Caprio" ? actor.name : actor.currentlyWorking }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      actors: [
        {
          name: "Di Caprio",
          currentlyWorking: "yes",
          movies: ["Titanic", "Inception"],
        },
        {
          name: "Christian",
          currentlyWorking: "no",
          movies: ["Batman", "The Prestige"],
        },
      ],
    };
  },
};
</script>
