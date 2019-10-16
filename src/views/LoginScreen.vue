<template>
  <div class="wrapper">
    <div class="bg-image"></div>
    <img id="logo" src="@/assets/logo.png" alt="" />
    <div id="netlify-modal" ref="modal"></div>
    <img class="bike" src="@/assets/bike.png" alt="" />
    <div class="cta">
      <button @click="toggleLogin">Login</button>
      <button @click="toggleLogin">Sign Up</button>
    </div>
    <LoginModal :isLogin="isLogin" />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal";
export default {
  name: "LoginScreen",
  components: {
    LoginModal
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin;
      console.log(this.isLogin);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
.bg-image {
  filter: blur(1.5px);
  width: 100%;
  height: 45%;
  position: absolute;
  top: 10em;
  left: 0;
  background-size: auto 50%;
  background-image: url("~@/assets/cityscape.svg");
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: animate-skyline 500s infinite linear;
}
#logo {
  height: 50px;
  margin-top: 100px;
}
.bike {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  top: 0;
  max-width: 20em;
}
.cta {
  padding-top: 25em;
  button {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    width: 120px;
    padding: 10px;
    background-color: #0a5f93;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    border-radius: 15px;
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
}
@keyframes animate-skyline {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 0;
  }
}
</style>
