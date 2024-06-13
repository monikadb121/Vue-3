<template>
  <h1>Slots</h1>
  <p>
    Behaves as a prop, but has more advantages. We can specify data or simple
    string when passing in props, but with slots, we can pass string, html or
    even images
  </p>
  <slots-child>Simple Text</slots-child>
  <slots-child><h5>Heading Text from parent</h5></slots-child>
  <slots-child><img src="../../assets/logo.png" /></slots-child>
  <slots-child>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr v-for="company in companyData" :key="company.Company">
        <td>{{ company.Company }}</td>
        <td>{{ company.Contact }}</td>
        <td>{{ company.Country }}</td>
      </tr>
    </table></slots-child
  >
  <slots-props
    ><template v-slot:default="slotProps"
      >{{ slotProps.firstName }} {{ slotProps.lastName }}</template
    ></slots-props
  >
  <slots-props
    ><template v-slot:default="slotProps"
      >{{ slotProps.lastName }} {{ slotProps.firstName }}</template
    ></slots-props
  >
</template>
<script>
import SlotsChild from "./SlotsChild.vue";
import SlotsProps from "./SlotsProps.vue";
export default {
  data() {
    return {
      companyData: [
        {
          Company: "Alfreds Futterkiste",
          Contact: "Maria Anders",
          Country: "Germany",
        },
        {
          Company: "Centro comercial Moctezuma",
          Contact: "Francisco Chang",
          Country: "Mexico",
        },
        {
          Company: "Magazzini Alimentari Riuniti",
          Contact: "Giovanni Rovelli",
          Country: "Italy",
        },
      ],
    };
  },
  components: {
    SlotsChild,
    SlotsProps,
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>