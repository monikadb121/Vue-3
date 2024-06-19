import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";
import TextBindingMustache from "../views/TextBinding/TextBindingMustache.vue";
import TextBindingVText from "../views/TextBinding/TextBindingVText.vue";
import HtmlBinding from "../views/HtmlBinding.vue";
import IdAttributesBinding from "../views/AttributesBinding/IdAttributesBinding.vue";
import DisabledBinding from "../views/AttributesBinding/DisabledBinding.vue";
import ClassBinding from "../views/ClassBinding/ClassBinding.vue";
import MultipleClassBinding from "../views/ClassBinding/MultipleClassBinding.vue";
import MultipleConditionBinding from "../views/ClassBinding/MultipleConditionBinding.vue";
import MultipleConditionObjFormat from "../views/ClassBinding/MultipleConditionObjFormat.vue";
import StyleBinding from "../views/StyleBinding/StyleBinding.vue";
import StyleBindingObj from "../views/StyleBinding/StyleBindingObj.vue";
import StyleBindingArr from "../views/StyleBinding/StyleBindingArr.vue";
import MiscellaneousTopics from "../views/MiscellaneousTopics.vue";
import IfElseConditions from "../views/IfElseConditions.vue";
import ShowElement from "../views/ShowElement.vue";
import ForLoop from "../views/ForLoop/ForLoop.vue";
import ForLoopNestedArr from "../views/ForLoop/ForLoopNestedArr.vue";
import ForLoopObj from "../views/ForLoop/ForLoopObj.vue";
import ForLoopWithIfElse from "../views/ForLoop/ForLoopWithIfElse.vue";
import MethodsTopic from "../views/MethodsTopic.vue";
import EventHandling from "../views/EventHandling.vue";
import FormHandling from "../views/FormHandling.vue";
import ComputedProperties from "../views/ComputedProperties.vue";
import WatchersTopic from "../views/WatchersTopic.vue";
import ComponentsTopic from "../views/ComponentsTopic/ComponentsTopic.vue";
import ComponentsTopic2 from "../views/ComponentsTopic/ComponentsTopic2.vue";
import PropChildToParent from "../views/ComponentsTopic/PropChildToParent.vue";
import ProvideAndInject from "../views/ProvideAndInject/ProvideAndInject.vue";
import SlotsTopic from "../views/Slots/SlotsTopic.vue";
import NamedSlots from "../views/Slots/NamedSlots.vue";
import DynamicComponents from "../views/DynamicComponents/DynamicComponents.vue";
import KeepAlive from "../views/DynamicComponents/KeepAlive.vue";
import Teleport from "../views/Teleport.vue";
import PostList from "../views/VueAndHTTP/PostList.vue";
import GetPost from "../views/VueAndHTTP/GetPost.vue";
import CreatePost from "../views/VueAndHTTP/CreatePost.vue";
import LifeCycleMethods from "../views/LifeCycleMethods/LifeCycleMethods.vue";
import LifeCycleExample from "../views/LifeCycleMethods/LifeCycleExamples/ParentComponent.vue";
import TemplateRef from "../views/TemplateRef.vue";
import Ref from "../views/CompositionAPI/RefFunction.vue";
import Reactive from "../views/CompositionAPI/ReactiveFunction.vue";
import NotFound from "../views/NotFound.vue";
import HomeHeader from "../components/HomeHeader.vue";
import NestedRoutes from "../views/NestedRoutes/UsersComponent.vue";
import UsersProfile from "../views/NestedRoutes/UsersChild/UsersProfile.vue";
import UsersHeader from "../components/UsersHeader.vue";
// import UsersPosts from "../views/NestedRoutes/UsersChild/UsersPosts.vue";
const UsersPosts = () =>
  import("../views/NestedRoutes/UsersChild/UsersPosts.vue"); // Dynamic import ensuring Lazy loading
import PiniaIntegrationA from "../views/PiniaIntegration/PiniaIntegrationA.vue";
import GetComments from "../views/Comments/GetComments.vue";

const routes = [
  {
    path: "/",
    name: "home", // called as named component.
    // Multiple components
    components: { default: HomeComponent, header: HomeHeader },
    // alias: "/homepage", // The component will be visible for /homepage as well
    alias: ["/homepage", "/home-component"], //Multiple Alias
  },
  // Redirect path to /
  {
    path: "/home",
    redirect: "/", // This will replace the /home path to / and will show home component
  },
  {
    path: "/text-binding/mustache",
    component: TextBindingMustache,
  },
  {
    path: "/text-binding/v-text",
    component: TextBindingVText,
  },
  {
    path: "/html-binding",
    component: HtmlBinding,
    // Per-route guard
    beforeEnter: (to, from) => {
      console.log("per route before enter");
      console.log(to, "to");
      console.log(from, "from");
    },
  },
  {
    path: "/attributes-binding/id",
    component: IdAttributesBinding,
  },
  {
    path: "/attributes-binding/disabled",
    component: DisabledBinding,
  },
  {
    path: "/class-binding",
    component: ClassBinding,
  },
  {
    path: "/class-binding/multiple",
    component: MultipleClassBinding,
  },
  {
    path: "/class-binding/multiple-condition",
    component: MultipleConditionBinding,
  },
  {
    path: "/class-binding/multiple-condition-obj",
    component: MultipleConditionObjFormat,
  },
  {
    path: "/style-binding",
    component: StyleBinding,
  },
  {
    path: "/style-binding/obj-format",
    component: StyleBindingObj,
  },
  {
    path: "/style-binding/arr-format",
    component: StyleBindingArr,
  },
  {
    path: "/flow-control",
    component: IfElseConditions,
  },
  {
    path: "/v-show",
    component: ShowElement,
  },
  {
    path: "/for-loop",
    component: ForLoop,
  },
  {
    path: "/for-loop/arr-of-arr",
    component: ForLoopNestedArr,
  },
  {
    path: "/for-loop/obj",
    component: ForLoopObj,
  },
  {
    path: "/for-loop/combined-if-else",
    component: ForLoopWithIfElse,
  },
  {
    path: "/methods",
    component: MethodsTopic,
  },
  {
    path: "/event-handling",
    component: EventHandling,
  },
  {
    path: "/form-handling",
    component: FormHandling,
  },
  {
    path: "/computed-properties",
    component: ComputedProperties,
  },
  {
    path: "/watchers",
    component: WatchersTopic,
  },
  {
    path: "/components",
    component: ComponentsTopic,
  },
  {
    path: "/components/prop-types",
    component: ComponentsTopic2,
  },
  {
    path: "/components/prop-child-to-parent",
    component: PropChildToParent,
  },
  {
    path: "/provide-and-inject",
    component: ProvideAndInject,
  },
  {
    path: "/slots",
    component: SlotsTopic,
  },
  {
    path: "/slots/named-slots",
    component: NamedSlots,
  },
  {
    path: "/slots/slots-props",
    component: SlotsTopic,
  },
  {
    path: "/dynamic-components",
    component: DynamicComponents,
  },
  {
    path: "/dynamic-components/keep-alive",
    component: KeepAlive,
  },
  {
    path: "/miscellaneous",
    component: MiscellaneousTopics,
  },
  {
    path: "/teleport",
    component: Teleport,
  },
  {
    path: "/get-request",
    component: PostList,
  },
  // Dynamic route
  // Named route
  // Route matching concept:: (\\d+)-- Regex is used to specify the type number for id
  // + sign after (\\d+) indicates the url can have any number of params after id (Minimum one parameter is required), that will still count as a valid path
  {
    path: "/post/:id(\\d+)+",
    name: "getPost",
    component: GetPost,
  },
  // ([a-z]+$) specifies postName should always be a string
  // Optional parameters :: postName is optional here, using ? /post-request is also accessible and /post-request/postName is also accessible
  // ([a-z]+$) is different concept and ? is itself a different concept.

  {
    path: "/post-request/:postName([a-z]+$)?",
    component: CreatePost,
  },
  // The *(asterick) here represents any number of params can be passed and the path will still be accessible, ex. /lifecycle is accessible, /lifecycle/one is accessible /lifecycle/one/two will be accessible and so on.
  // diff between * and ? is that, with ? we can access the mentioned path with or without defined params, and with * we can access path with or without defined params as well as undefined params
  {
    path: "/lifecycle/:life*",
    name: "lifecycle",
    component: LifeCycleMethods,
    // By default, routing with vue router is not case sensitive. /Lifecycle works same as /lifecycle and /LIFECYCLE. To MAke it sensitive as per defined path, use sesitive true
    sesitive: true,
  },
  {
    path: "/lifecycle/examples",
    component: LifeCycleExample,
  },
  {
    path: "/template-refs",
    component: TemplateRef,
  },
  {
    path: "/ref",
    component: Ref,
  },
  {
    path: "/reactive",
    component: Reactive,
  },
  // Nested Routes
  {
    path: "/users",
    components: { default: NestedRoutes, header: UsersHeader },
    children: [
      {
        path: ":id/profile",
        component: UsersProfile,
      },
      {
        path: "posts",
        component: UsersPosts,
      },
    ],
  },
  { path: "/comments/get", component: GetComments },
  { path: "/pinia-integration-a", component: PiniaIntegrationA },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
