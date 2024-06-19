<template>
  <div>
    <h1>Get comments</h1>
    <div v-for="comment in comments" :key="comment.id">
      <h3>Comment: {{ comment.comment }}</h3>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useCommentsStore } from "@/stores/comments";
import { storeToRefs } from "pinia";

const commentsStore = useCommentsStore();
const { getComments } = commentsStore;
const { comments } = storeToRefs(commentsStore);

onMounted(() => {
  getComments();
});
</script>