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
    <!-- <a-scene stats embedded arjs="trackingMethod: best; debugUIEnabled: false; sourceType: webcam">
      <a-marker preset="hiro">
        <a-box position="0 0 0" material="color: blue;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>-->
    <a-scene background="color: #ECECEC">
      <!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>-->
      <a-entity>
        <a-entity
          obj-model="obj: url(/3d/testHouseRotate.obj)"
          position="0 0 0"
          scale="0.05 0.05 0.05"
        ></a-entity>
      </a-entity>
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
