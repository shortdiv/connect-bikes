<template>
  <div class="details-card">
    <form
      name="delivery-request"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <header>
        <h2>Log Trip</h2>
      </header>
      <label>
        <span>Start Location</span>
        <input
          id="start-location"
          name="startLocation"
          type="text"
          v-model="form.startLocation"
        />
      </label>
      <label>
        <span>Destination</span>
        <input
          id="destination"
          name="destination"
          type="text"
          v-model="form.endLocation"
        />
      </label>
      <label>
        <span>Miles Travelled</span>
        <input
          id="miles"
          name="miles"
          type="text"
          v-model="form.milestravelled"
        />
      </label>
      <button type="submit" class="submit-button">Log</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RideDetails",
  props: ["setTrip"],
  data() {
    return {
      form: {
        startLocation: "",
        endLocation: "",
        milesTravelled: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      debugger;
      this.setTrip(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.details-card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form > div > label > span {
  text-align: right;
  width: 100%;
  margin: 0 0 5px 0;
  text-align: left;
  display: block;
  font-size: 1.3em;
}
label {
  display: block;
}
input[type="text"],
input[type="textarea"] {
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 2px;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5em 0.6em;
  margin-bottom: 0.5em;
  width: 100%;
  &:focus,
  &:active {
    outline: 0.25rem auto #008ea0ff;
  }
}
@media (min-width: 1200px) {
  form > div > label > span {
    width: 15%;
    padding-right: 1em;
    display: inline-block;
  }
  input[type="text"],
  input[type="textarea"] {
    width: 50%;
  }
}
.submit-button {
  width: 50%;
  padding: 10px 20px;
  outline: none;
  background-color: #282c34;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 0 9px #95a5a6;
  box-shadow: 0 9px #95a5a6;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;
  margin-top: 1em;
}
</style>
