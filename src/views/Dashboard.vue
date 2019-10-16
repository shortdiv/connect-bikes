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
  data() {
    return {
      tripHistory: [
        {
          distance_miles: 2.99,
          end_date: "2018-07-11",
          end_location: "piedmont park",
          end_time: "22:41",
          start_date: "2018-07-11",
          start_location: "piedmont park",
          start_time: "21:54"
        }
      ]
    };
  },
  methods: {
    logout() {}
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
