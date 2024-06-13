<template>
  <form @submit.prevent="submitHandler">
    ** A modifier prevent is used here to stop page from refreshing on form
    submit, its an alternate to prevent default method**
    <div>{{ formValues }}</div>
    <!-- Simple text box -->
    <div>
      <label for="name">Name</label><br />
      <input type="text" id="name" v-model.trim.lazy="formValues.name" /><br />
      ** A modifier .trim is used in this field which removes all the unncessary
      spaces, if you need to write a fullname, containing space,<br />
      the property will allow single space and remove unncessary spaces**
      <br />** Another modifier .lazy is used, to append the value to the
      formValue array when user loses focus to the form input field **
    </div>

    <!-- Textarea -->
    <div>
      <label for="profileSummary">Profile Summary</label><br />
      <textarea
        type="text"
        id="profileSummary"
        v-model="formValues.profileSummary"
      ></textarea>
    </div>
    <!-- Select dropdown -->
    <div>
      <label for="country">Country</label><br />
      <select id="country" v-model="formValues.country">
        <option selected value="">Select</option>
        <option value="india">India</option>
        <option value="indonasia">Indonasia</option>
        <option value="uganda">Uganda</option>
      </select>
    </div>
    <!-- Multiple select dropdown -->
    <div>
      <label for="preferredCity">Preferred City</label><br />
      <select id="preferredCity" multiple v-model="formValues.preferredCity">
        <option value="pune">Pune</option>
        <option value="indore">Indore</option>
        <option value="bangalore">Bangalore</option>
      </select>
    </div>
    <!-- Checkbox -->
    <div>
      <label for="remote">Available for remote job?</label>
      <input
        type="checkbox"
        name="remote"
        id="remote"
        v-model="formValues.remote"
        true-value="yes"
        false-value="no"
      />
    </div>
    <!-- Multiple Checkboxes -->
    <div>
      <label>Skillset</label>
      <input
        type="checkbox"
        value="html"
        id="html"
        v-model="formValues.skillset"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        value="css"
        id="css"
        v-model="formValues.skillset"
      />
      <label for="css">CSS</label>
      <input type="checkbox" value="js" id="js" v-model="formValues.skillset" />
      <label for="js">JS</label>
    </div>
    <!-- Radio buttons -->
    <div>
      <label>Experience</label>
      <input
        type="radio"
        value="0-2"
        id="0-2"
        v-model="formValues.experience"
      />
      <label for="0-2">0-2yrs</label>
      <input
        type="radio"
        value="2-4"
        id="2-4"
        v-model="formValues.experience"
      />
      <label for="2-4">2-4yrs</label>
      <input
        type="radio"
        value="4-6"
        id="4-6"
        v-model="formValues.experience"
      />
      <label for="4-6">4-6yrs</label>
    </div>
    <!-- Number field -->
    <div>
      <label for="age">Age</label><br />
      <input
        type="number"
        id="age"
        v-model.number="formValues.age"
        maxlength="100"
      />
      ** used a modifier .number here, that results in saving the age as a
      number type **
    </div>
    <!-- Submit button -->
    <button type="submit" @keyup.enter="submitHandler">Submit</button>
  
  </form>
</template>
<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        preferredCity: [],
        remote: "yes",
        skillset: [],
        experience: "",
        age: null,
      },
    };
  },
  methods: {
    submitHandler() {
      console.log(this.formValues, "formVals");
    },
  },
};
</script>
<style scoped>
form {
  max-width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  background: #e7e9eb;
  padding: 4rem;
}
div {
  text-align: left;
  margin-bottom: 1rem;
}
input,
textarea,
select {
  padding: 0.5rem;
}
</style>