<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input is invalid.</p>
      <p>Please check all inputs and make sure you enter at least few characters for each input.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="inputTitle"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="inputDesc"/>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="inputLink"/>
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      inputIsInvalid: false
    }
  },
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.inputTitle.value.trim();
      const enteredDesc = this.$refs.inputDesc.value.trim();
      const enteredLink = this.$refs.inputLink.value.trim();
      if(enteredTitle === '' || enteredDesc === '' || enteredLink === '') {
        this.inputIsInvalid = true
        return
      }
      this.addResource(enteredTitle, enteredDesc, enteredLink);
      this.clearData();
    },
    clearData() {
      this.$refs.inputTitle.value = '';
      this.$refs.inputDesc.value = '';
      this.$refs.inputLink.value = '';
    },
    confirmError() { this.inputIsInvalid = false; }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
.form-control {
  margin: 1rem 0;
}
</style>
