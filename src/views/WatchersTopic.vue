<template>
  <div>
    <div>Watchers: watches all the updates happening</div>
    <h2>Volume tracker</h2>
    <h3>Current Volume - {{ volume }}</h3>
    <button @click="volume += 2">Increase</button> &nbsp;
    <button @click="volume -= 2">Decrease</button>
    <h2>Deep watchers</h2>
    <p>
      To let the watchers access elemnts of arrays or key value of objects, we
      need to set deep to true
    </p>
    <div><button @click="movies.push('Inception')">Add Movie</button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      volume: 0,
      movies: ["Batman", "Superman"],
    };
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue === 16) {
        alert("Volume is high");
      }
    },
    movies: {
      handler(newValue) {
        console.log(newValue, "newValue");
      },
      deep: true,
    },
  },
};
</script>