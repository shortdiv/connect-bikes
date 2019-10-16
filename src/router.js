import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import LoginScreen from "./views/LoginScreen.vue";
import store from "./store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen
  }
];

const router = new Router({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.authRequired);
  if (!authRequired) return next();

  if (store.getters["isLoggedIn"]) {
    // Validate the local user token...
    return store.dispatch("validate").then(validUser => {
      // Then continue if the token still represents a valid user,
      // otherwise redirect to login.
      validUser ? next() : redirectToLogin();
    });
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin();

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: "LoginScreen", query: { redirectFrom: to.fullPath } });
  }
});

export default router;
