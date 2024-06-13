<template>
  <div v-for="(actor, index) in actors" v-bind:key="index">
    <h2>{{ actor.name }}</h2>
    <ul>
      <li v-for="(movie, movieIndex) in actor.movies" v-bind:key="movieIndex">
        {{ movie }}
      </li>
    </ul>
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
