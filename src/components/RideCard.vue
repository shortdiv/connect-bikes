<template>
  <div>
    <div class="card" v-for="(ride, ind) in rides" :key="ind">
      <div class="card__content">
        <div class="card__content-info">
          <p>
            Started ride at {{ ride.start_time }}
            <span id="start">{{ ride.start_location }}</span>
          </p>
          <div class="pin"></div>
          <p>
            Ended ride at {{ ride.end_time }}
            <span>{{ ride.end_location }}</span>
          </p>
        </div>
        <div class="card__content-stats">
          {{ ride.distance_miles }} <span>mi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RideCard",
  props: {
    rides: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: block;
  background: #fff;
  border-radius: 2px;
  height: 120px;
  margin: 1rem;
  position: relative;
  width: 450px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:not(:first-child) {
    margin-top: 5em;
  }
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em #f6b924;
    transform: translateY(-0.25em);
    cursor: pointer;
  }
}

.card__content {
  text-align: left;
  background-color: #f6f6f6;
  padding: 1.5em;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #a9a9b6;
  }
}

.card__content-info {
  flex: 2;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50px;
    display: block;
    height: 150px;
    margin: auto;
    border-right: 1px solid black;
  }
  p:first-child {
    &:after {
      content: "";
      position: absolute;
      height: 40px;
      left: -15px;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 1px solid #a9a9b6;
    }
  }
  span {
    display: block;
  }
}

.card__content-stats {
  span {
    display: block;
    font-size: 1.5rem;
  }
}

#start {
  &:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 1px solid green;
    width: 12px;
    height: 12px;
    left: -20px;
    top: 18px;
  }
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: green;
    left: -18px;
    top: 20px;
  }
}

.card__content-stats {
  flex-basis: 100px;
  text-align: center;
  font-size: 3em;
}

.pin {
  position: absolute;
  top: 70%;
  left: 50%;
  margin-left: -172px;
  border-radius: 50% 50% 50% 0;
  border: 2px solid red;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  &:after {
    position: absolute;
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    top: 63%;
    left: 67%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: red;
  }
}
</style>
