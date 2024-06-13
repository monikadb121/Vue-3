<template>
  <h1>Dynamic Components</h1>
  <styled-button @click="activeTab = 'TabA'" btnTitle="Tab A" />
  <styled-button @click="activeTab = 'TabB'" btnTitle="Tab B" />
  <styled-button @click="activeTab = 'TabC'" btnTitle="Tab C" />

  <!-- its a special element provided by vue to render component. need to bind is attribute in order to make it work  -->
  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
  <!-- The above line of code i.e. component :is=activetab works exactly the same as the three lines below -->
  <tab-a v-if="activeTab === 'TabA'" />
  <tab-b v-if="activeTab === 'TabB'" />
  <tab-c v-if="activeTab === 'TabC'" />
</template>
<script>
import TabA from "./Tabs/TabA.vue";
import TabB from "./Tabs/TabB.vue";
import TabC from "./Tabs/TabC.vue";
import StyledButton from "../../components/StyledButton.vue";
export default {
  components: {
    TabA,
    TabB,
    TabC,
    StyledButton,
  },
  data() {
    return { activeTab: "TabA" };
  },
};
</script>