<template>
  <div id="map" ref="map">
    <slot :mapContext="mapContext" :loaded="loaded"></slot>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "BaseMap",
  props: {
    mapStyle: {
      type: String,
      required: false,
      default: "mapbox://styles/mapbox/dark-v10"
    },
    center: {
      type: Array,
      required: false,
      default: () => [-84.3902, 33.7491]
    },
    zoom: {
      type: Number,
      required: false,
      default: 12
    }
  },
  data() {
    return {
      mapContext: null,
      loaded: false
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWxscnlkZXIiLCJhIjoidWs5cUFfRSJ9.t8kxvO3nIhCaAl07-4lkNw";
    var map = new mapboxgl.Map({
      container: this.$refs.map,
      style: this.mapStyle,
      center: this.center,
      zoom: this.zoom
    });
    this.mapContext = map;
    map.on("load", () => {
      this.loaded = true;
    });
  }
};
</script>

<style lang="scss">
@import "~/styles/map.css";
</style>
