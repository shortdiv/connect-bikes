<script>
export default {
  name: "sourceLayer",
  props: {
    mapContext: {
      required: true
    },
    sourceId: {
      type: String
    },
    dataSrc: {
      type: [String, Object],
      required: true
    },
    sourceType: {
      type: String,
      required: true
    }
  },
  render() {
    return null;
  },
  watch: {
    dataSrc(newVal) {
      if (this.mapContext.getSource(this.sourceId) !== undefined) {
        debugger;
        this.mapContext.getSource(this.sourceId).setData(newVal);
      }
    }
  },
  mounted() {
    if (this.sourceId == "animated-line") {
      debugger;
    }
    if (this.sourceType === "geojson") {
      this.mapContext.addSource(this.sourceId, {
        type: "geojson",
        data: this.dataSrc
      });
    } else {
      this.mapContext.addSource(this.sourceId, {
        type: "vector",
        url: this.dataSrc
      });
    }
  }
};
</script>
