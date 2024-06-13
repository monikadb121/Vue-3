<template>
  <div class="main-wrapper">
    <div class="sidebar">
      <side-bar />
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
.main-wrapper {
  display: flex;
}
.sidebar {
  width: 20%;
}
.content-wrapper {
  width: 100%;
}
</style>
