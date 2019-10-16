import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import GoTrue from "gotrue-js";

firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_DB_NAME}.firebaseio.com`,
  storageBucket: `${process.env.VUE_APP_BUCKET}.appspot.com`,
  projectId: `${process.env.VUE_APP_PROJECT_ID}`
});

const db = firebase.firestore();

const auth = new GoTrue({
  APIUrl: "https://connect-bikes.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    isLoggedIn(state) {
      return !!state.currentUser;
    }
  },
  state: {
    auth: null,
    currentUser: null,
    tripHistory: null
  },
  mutations: {
    ADD_TO_TRIPS(state, val) {
      state.tripHistory.push(val);
    },
    SET_CURRENT_USER(state, value) {
      state.currentUser = value;
    },
    SET_TRIPS(state, value) {
      state.tripHistory = value;
    }
  },
  actions: {
    validate({ commit, state }) {
      if (!state.currentUser) return Promise.resolve(null);
      const user = auth.currentUser();
      commit("SET_CURRENT_USER", user);
      return user;
    },
    attemptSignup({ state }, credentials) {
      console.log(state);
      return new Promise((resolve, reject) => {
        auth
          .signup(credentials.email, credentials.password)
          .then(response => {
            console.log("Confirmation email sent", response);
            resolve(response);
          })
          .catch(error => {
            reject(error);
            console.log("It's an error", error);
          });
      });
    },
    attemptLogin({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        auth
          .login(credentials.email, credentials.password)
          .then(response => {
            resolve(response);
            commit("SET_CURRENT_USER", response);
          })
          .catch(error => {
            reject(error.json);
          });
      });
    },
    attemptLogout({ commit }) {
      return new Promise((resolve, reject) => {
        const user = auth.currentUser();
        user
          .logout()
          .then(response => {
            console.log(response);
            resolve(response);
            commit("SET_CURRENT_USER", null);
          })
          .catch(error => {
            reject(error);
            console.log("Could not log out", error);
          });
      });
    },
    setNewTrip({ commit }, val) {
      let trips = db.collection("ride-history");
      trips
        .add({
          start_location: val.startLocation,
          end_location: val.endLocation,
          distance_miles: val.milesTravelled
        })
        .then(() => {
          // dispatch("fetchTripHistory")
          commit("ADD_TO_TRIPS", {
            start_location: val.startLocation,
            end_location: val.endLocation,
            distance_miles: val.milesTravelled
          });
        });
    },
    async fetchTripHistory({ commit }) {
      let trips = db.collection("ride-history");
      trips = await trips.get();
      let tripHistory = [];

      trips.docs.forEach(doc => {
        const data = doc.data();
        tripHistory.push(data);
      });

      commit("SET_TRIPS", tripHistory);
    }
  }
});
