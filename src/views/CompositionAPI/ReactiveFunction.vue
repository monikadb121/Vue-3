<template>
  <h1>Ref</h1>
  <h2>Options- {{ o_firstname }} {{ o_lastname }} a.k.a {{ o_heroname }}</h2>
  <h2>
    Composition Ref- {{ c_firstname }} {{ c_lastname }} a.k.a {{ c_heroname }},
  </h2>
  <h2>Composition Ref- {{ Greet }}</h2>
  <h2>Composition Ref- {{ GreetHero }}</h2>
  <h2>Composition Reactive- {{ state.firstname }} {{ state.lastname }}</h2>
  <h2>Composition Reactive- {{ reactiveGreetHero }}</h2>
  <p>
    If dealing with Primitive data types, use ref as reactive requires an object
  </p>
</template>
<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const c_firstname = ref("Clark");
    const c_lastname = ref("Kent");
    const c_heroname = ref("Superman");
    const Greet = `Hello ${c_firstname.value}`;
    const GreetHero = `Hello ${c_firstname.value} ${c_lastname.value} a.k.a ${c_heroname.value}`;
    // Reactive function lets us avoid multiple declaration of variables.
    const state = reactive({
      firstname: "Princess",
      lastname: "Diana",
      heroname: "Wonder woman",
    });
    const reactiveGreetHero = `Hello ${state.firstname} ${state.lastname} a.k.a ${state.heroname}`;
    return {
      c_firstname,
      c_lastname,
      c_heroname,
      Greet,
      GreetHero,
      reactiveGreetHero,
      state,
    };
  },
  data() {
    // used o_ for options Api
    return { o_firstname: "Bruce", o_lastname: "Wayne", o_heroname: "Batman" };
  },
};
</script>