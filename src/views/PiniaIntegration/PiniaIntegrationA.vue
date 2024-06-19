<template>
  <h1>Pinia integrationn</h1>
  <button @click="logout" v-if="isAuthenticated">Logout</button>
  <button @click="login" v-else>Login</button>
  <p>Is authenticated: {{ isAuthenticated }}</p>
  <p>User name: {{ fullname }}</p>
  <CounterFunctionality />
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import CounterFunctionality from "./CounterFunctionality.vue";
import { storeToRefs } from "pinia";
const { logout, login } = useAuthStore();
const authStore = useAuthStore();
const { isAuthenticated, fullname } = storeToRefs(authStore);
</script>
<script>
export default {
  name: "PiniaIntegrationA",
};
</script>