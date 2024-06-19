import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChevronDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import router from "./router";
import { createPinia } from "pinia";

library.add(faChevronDown, faArrowLeft, faArrowRight);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

// Global before guards
router.beforeEach(() => {
  // console.log("Global -- beforeEach");
  // console.log(from, "from");
  // console.log(to, "to");
  // Redirection
  // if (to.path === "/html-binding") {
  //   router.push("/");
  // }
});

// Global resolve guards
router.beforeResolve(() => {
  // console.log("Global -- beforeResolve");
  //  console.log(from, "from");
  //  console.log(to, "to");
});

// Global after hooks
router.afterEach(() => {
  // console.log("Global -- afterEach");
  // console.log(from, "from");
  // console.log(to, "to");
});
