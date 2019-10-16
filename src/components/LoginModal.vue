<template>
  <div>
    <form @submit.prevent="login()">
      <h2>Log In:</h2>
      <ul>
        <li>
          <label>
            <span>Email:</span>
            <input type="text" v-model="loginCreds.email" />
          </label>
        </li>
        <li>
          <label>
            <span>Password:</span>
            <input
              type="password"
              ref="passwordField"
              v-model="loginCreds.password"
            />
          </label>
        </li>
      </ul>
      <button type="submit" class="submit-button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginModal",
  data() {
    return {
      loginCreds: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions(["attemptLogin"]),
    login() {
      this.attemptLogin(this.loginCreds).then(() => {
        this.handleSuccessfulLogin();
      });
    },
    handleSuccessfulLogin() {
      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
