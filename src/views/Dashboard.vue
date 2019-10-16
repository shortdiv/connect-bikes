<template>
  <div class="home">
    <NavBar @logout-requested="logout" />
    <div class="body">
      <RideCard :rides="tripHistory" />
      <RideDetails class="details" :setTrip="setNewTrip" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RideCard from "@/components/RideCard.vue";
import RideDetails from "@/components/RideDetails.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Dashboard",
  components: {
    RideCard,
    RideDetails,
    NavBar
  },
  computed: {
    ...mapState(["tripHistory"])
  },
  methods: {
    ...mapActions(["fetchTripHistory", "attemptLogout", "setNewTrip"]),
    logout() {
      this.attemptLogout().then(() => {
        this.handleSuccessfulLogout();
      });
    },
    handleSuccessfulLogout() {
      this.$router.push(this.$route.query.redirect || "/login");
    }
  },
  created() {
    this.fetchTripHistory();
  }
};
</script>

<style lang="scss" scoped>
.body {
  padding-top: 60px;
  display: flex;
}

.details {
  flex: 1;
}
</style>
