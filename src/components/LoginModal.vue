<template>
  <div>
    <form @submit.prevent="login()" v-if="isLogin">
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
    <form @submit.prevent="signup()" v-else>
      <h2>Sign up:</h2>
      <ul>
        <li>
          <label>
            <span>Email:</span>
            <input type="text" v-model="signupCreds.email" />
          </label>
        </li>
        <li>
          <label>
            <span>Password:</span>
            <input
              type="password"
              ref="passwordField"
              v-model="signupCreds.password"
            />
          </label>
        </li>
      </ul>
      <button type="submit" class="submit-button">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    isLogin: Boolean
  },
  data() {
    return {
      loginCreds: {
        email: null,
        password: null
      },
      signupCreds: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    login() {},
    signup() {}
  }
};
</script>

<style lang="scss" scoped></style>
