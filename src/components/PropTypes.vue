<template>
  <div>
    <h2>Prop types</h2>
    <h3>Title: {{ title }}</h3>
    <h3 v-bind="$attrs">Likes: {{ likes }}</h3>
    <!-- We have specified inheritAttrs to be false, that means no non-prop attributes will be inherited to our root element, but to let it inherit for this particular element, we can bind attrs in this manner  -->
    <h3>isPublished: {{ isPublished ? "Yes" : "No" }}</h3>
  </div>
</template>
<script>
export default {
  name: "PropTypes",
  props: {
    title: {
      type: String,
      required: true,
      default: "No Title Found from parent",
    },
    // If title is not passed from parent, the default value will be shown
    // Here, required valiation means the title prop is required from the parent component, however adding this dosent result in any error, it gives warning in console
    likes: Number,
    isPublished: Boolean,
  },
  inheritAttrs: false,
  //   This will prevent non-prop attributes from getting bind. For ex. if we do not pass this attribute, any class or id passed from parent component will be applied to the root elemnt of this component but with this set to false, it won't inherit.
};
</script>