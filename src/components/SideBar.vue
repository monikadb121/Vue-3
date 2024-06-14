<template>
  <div class="main-container">
    <h2 :style="{ 'text-align': 'center' }">
      <router-link to="/">Vue 3</router-link>
    </h2>
    <ul>
      <li @click="openTextBindingSubMenu">
        Text binding
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="textBinding">
        <router-link to="/text-binding/mustache"
          ><li>Mustache Syntax</li></router-link
        >
        <router-link to="/text-binding/v-text"> <li>v-text</li></router-link>
      </ol>
      <router-link to="/html-binding"> <li>Html binding</li></router-link>
      <li @click="openAttributesBindingSubMenu">
        Attributes binding
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="attributesBinding">
        <router-link to="/attributes-binding/id"><li>Id</li></router-link>
        <router-link to="/attributes-binding/disabled">
          <li>Disabled</li></router-link
        >
      </ol>
      <li @click="openClassBindingSubMenu">
        Class binding
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="classBinding">
        <router-link to="/class-binding"><li>Class binding</li></router-link>
        <router-link to="/class-binding/multiple"
          ><li>Multiple class binding</li></router-link
        >
        <router-link to="/class-binding/multiple-condition"
          ><li>Multiple conditions binding with class</li></router-link
        >
        <router-link to="/class-binding/multiple-condition-obj">
          <li>Multiple conditions binding in object format</li></router-link
        >
      </ol>
      <li @click="openStyleBindingSubMenu">
        Style binding
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="styleBinding">
        <router-link to="/style-binding"><li>Inline Style</li></router-link>
        <router-link to="/style-binding/obj-format">
          <li>Style binding in object format</li></router-link
        >
        <router-link to="/style-binding/arr-format">
          <li>Style binding in Array format</li></router-link
        >
      </ol>
      <router-link to="/flow-control"> <li>If else statements</li></router-link>
      <router-link to="/v-show"> <li>v-show</li></router-link>
      <li @click="openForLoopSubMenu">
        For loop
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="forLoop">
        <router-link to="/for-loop"><li>For loop</li></router-link>
        <router-link to="/for-loop/arr-of-arr"
          ><li>For loop for nested arrays</li></router-link
        >
        <router-link to="/for-loop/obj"
          ><li>For loop for objects</li></router-link
        >
        <router-link to="/for-loop/combined-if-else"
          ><li>For loop with If-else</li></router-link
        >
      </ol>
      <router-link to="/methods"><li>Methods</li></router-link>
      <router-link to="/event-handling"><li>Event Handling</li></router-link>
      <router-link to="/form-handling"><li>Form Handling</li></router-link>
      <router-link to="/watchers"><li>Watchers</li></router-link>
      <router-link to="/computed-properties"
        ><li>Computed Properties</li></router-link
      >
      <li @click="openComponentSubMenu">
        Components
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="component">
        <router-link to="/components"
          ><li>Components and Props</li></router-link
        >
        <router-link to="/components/prop-types"
          ><li>Prop Types</li></router-link
        >
        <router-link to="/components/prop-child-to-parent"
          ><li>Pass prop from Child to Parent</li></router-link
        >
      </ol>
      <router-link to="/provide-and-inject"
        ><li>Provide and inject</li></router-link
      >
      <li @click="openSlotsSubMenu">
        Slots
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="slots">
        <router-link to="/slots"><li>Slots</li></router-link>
        <router-link to="/slots/named-slots"><li>Named Slots</li></router-link>
        <router-link to="/slots/slots-props"><li>Slots Props</li></router-link>
      </ol>
      <li @click="openDynamicComponentsSubMenu">
        Dynamic Components
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="dynamicComponents">
        <router-link to="/dynamic-components"
          ><li>Dynamic components</li></router-link
        >
        <router-link to="/dynamic-components/keep-alive"
          ><li>Keep Alive</li></router-link
        >
      </ol>
      <router-link to="/teleport"><li>Teleport</li></router-link>
      <li @click="openVueAndHttpSubMenu">
        Vue and HTTP
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="vueAndHttp">
        <router-link to="/get-request"><li>GET Request</li></router-link>
        <router-link to="/post-request"><li>POST Request</li></router-link>
      </ol>
      <li @click="openLifecycleSubMenu">
        Lifecycle Methods
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="lifecycle">
        <router-link to="/lifecycle"><li>Lifecycle Methods</li></router-link>
        <router-link to="/lifecycle/examples"
          ><li>Lifecycle Examples</li></router-link
        >
      </ol>
      <router-link to="/template-refs"><li>Template Ref</li></router-link>
      <li @click="openCompositionAPISubMenu">
        Composition API
        <font-awesome-icon icon="fa-solid fa-chevron-down" class="down-arrow" />
      </li>
      <ol v-if="compositionAPI">
        <router-link to="/ref"><li>Ref Function</li></router-link>
        <router-link to="/reactive"><li>Reactive function</li></router-link>
        <router-link to="/#"><li>To be continued...</li></router-link>
      </ol>
      <router-link to="/miscellaneous"><li>Miscellaneous</li></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textBinding: false,
      attributesBinding: false,
      classBinding: false,
      styleBinding: false,
      forLoop: false,
      component: false,
      slots: false,
      dynamicComponents: false,
      vueAndHttp: false,
      lifecycle: false,
      compositionAPI: false,
    };
  },
  methods: {
    openTextBindingSubMenu() {
      this.textBinding = !this.textBinding;
    },
    openAttributesBindingSubMenu() {
      this.attributesBinding = !this.attributesBinding;
    },
    openClassBindingSubMenu() {
      this.classBinding = !this.classBinding;
    },
    openStyleBindingSubMenu() {
      this.styleBinding = !this.styleBinding;
    },
    openForLoopSubMenu() {
      this.forLoop = !this.forLoop;
    },
    openComponentSubMenu() {
      this.component = !this.component;
    },
    openSlotsSubMenu() {
      this.slots = !this.slots;
    },
    openDynamicComponentsSubMenu() {
      this.dynamicComponents = !this.dynamicComponents;
    },
    openVueAndHttpSubMenu() {
      this.vueAndHttp = !this.vueAndHttp;
    },
    openLifecycleSubMenu() {
      this.lifecycle = !this.lifecycle;
    },
    openCompositionAPISubMenu() {
      this.compositionAPI = !this.compositionAPI;
    },
  },
};
</script>
<style scoped>
.main-container {
  overflow-y: auto;
  height: 100vh;
  position: fixed;
  width: 15%;
  /* background: linear-gradient(135deg, #c7a9e9, #a1c4fd); */
  background: rgb(66, 58, 142);
  background: linear-gradient(
    312deg,
    rgb(191 185 255) 0%,
    rgb(0 173 125 / 0%) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
ul,
ol {
  padding: 0;
}
.down-arrow {
  cursor: pointer;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;
  cursor: pointer;
  color: #492c68b5;
}
li:hover {
  background-color: #7da7ff;
  color: #ffffff;
}
a {
  text-decoration: none;
  color: black;
}
a:visited {
  color: black;
}
ol li {
  padding: 0.5rem 2rem;
  color: #9175fd;
}
.main-container::-webkit-scrollbar {
  width: 5px;
}

.main-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
  margin: 10px;
}

.main-container::-webkit-scrollbar-thumb {
  background: #492c68b5;
  border-radius: 6px;
}

.main-container::-webkit-scrollbar-thumb:hover {
  background: #492c68b5;
}
</style>
