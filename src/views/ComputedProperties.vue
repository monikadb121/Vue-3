<template>
  <h1>Computed Properties</h1>
  <h3>Fullname: {{ firstName }} {{ lastName }}</h3>
  <h3>Computed fullname: {{ fullName }}</h3>
  <h3>Total cost: {{ totalCost }}</h3>
  <p>
    The same result can be calculated using methods, but its better to use
    computed properties in such cases as computed properties are cached, which
    means the value wont be recalculated until and unless there is any change in
    the provided values, whereas method will be called if the page refreshes or
    there is any update in the UI
  </p>
  <h2>{{ simplifiedData }}</h2>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Bruce",
      lastName: "Wayne",
      parentClusteredData: {
        childClusteredData: {
          someClusteredData: {
            name: "My name is khan",
          },
        },
      },
      cartData: [
        { id: 1, name: "phone1", cost: "100" },
        { id: 2, name: "phone2", cost: "200" },
        { id: 3, name: "phone3", cost: "400.343" },
        { id: 4, name: "phone4", cost: "408.2" },
        { id: 5, name: "phone5", cost: "454" },
        { id: 6, name: "phone6", cost: "1200" },
      ],
    };
  },
  computed: {
    fullName() {
      return `${this.firstName + " " + this.lastName}`;
    },
    totalCost() {
      return this.cartData.map((a) => Number(a?.cost)).reduce((a, b) => a + b);
    },
    simplifiedData() {
      return this.parentClusteredData.childClusteredData.someClusteredData;
    },
  },
};
</script>