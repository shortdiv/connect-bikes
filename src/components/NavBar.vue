<template>
  <nav class="nav-bar">
    <div class="bar-column">
      <div class="logo--img">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
    </div>
    <div class="bar-column">
      <button @click="logout">
        <span>Log me out</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$emit("logout-requested");
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 25%;
}
.nav-bar {
  background: #0f1b20;
  height: 3.6rem;
  padding: 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  display: grid;
  button {
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    span {
      padding-right: 13px;
      font-size: 0.75em;
      position: relative;
      vertical-align: middle;
    }
    i {
      vertical-align: middle;
    }
  }
}
</style>
