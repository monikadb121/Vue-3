<template>
  <h1>Create post</h1>
  <form @submit.prevent="createPost">
    <div class="form-wrapper">
      <div>
        <label for="title">Title</label><br />
        <input
          type="text"
          v-model="formData.title"
          id="title"
          placeholder="Title"
        />
      </div>
      <div>
        <label for="slug">Slug</label><br />
        <input
          type="text"
          v-model="formData.slug"
          id="slug"
          placeholder="Slug"
        />
      </div>
    </div>
    <div class="form-wrapper">
      <div>
        <label for="userId">User Id</label><br />
        <input
          type="text"
          v-model="formData.userId"
          id="userId"
          placeholder="User Id"
        />
      </div>
      <div>
        <label for="status">Status</label><br />
        <input
          type="text"
          v-model="formData.status"
          id="status"
          placeholder="Status"
        />
      </div>
    </div>
    <styled-button btnTitle="Save">Save</styled-button>
  </form>
</template>
<script>
import axios from "axios";
import StyledButton from "../../components/StyledButton.vue";
export default {
  components: { StyledButton },
  data() {
    return {
      formData: {
        title: "",
        slug: "",
        userId: "",
        status: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.org/posts", this.formData)
        .then((result) => console.log(result.data, "res"))
        .catch((err) => alert(err));
    },
  },
};
</script>
<style scoped>
form {
  max-width: max-content;
  margin: auto;
}
div {
  padding: 0.5rem 0;
}
input {
  padding: 0.5rem;
}
.form-wrapper {
  display: flex;
  gap: 1rem;
}
</style>