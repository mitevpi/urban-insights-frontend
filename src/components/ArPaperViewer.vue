<template>
  <div class="body">
    <!-- <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false">
      <a-entity scale=".1 .1 .1">
        <a-entity
          obj-model="obj: url(/3d/testHouseRotate.obj)"
          position="0 0 0"
          scale="0.1 0.1 0.1"
        ></a-entity>
      </a-entity>
      <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>-->
    <a-scene stats embedded arjs="trackingMethod: best; debugUIEnabled: false; sourceType: webcam">
      <a-marker preset="hiro">
        <a-box position="0 0 0" material="color: blue;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "ArPaper",
  components: {},
  props: {
    modelPath: String
  },
  methods: {
    testClick() {
      console.log("MODEL PATH", this.modelPath);
    }
  }
};
</script>

<style scoped>
.body {
  font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
  margin: 2em;
}

/* h1 {
  font-style: italic;
  color: #373fff;
} */
</style>
