<template>
  <div class="body">
    <a-scene embedded arjs="sourceType: webcam; trackingMethod: best; debugUIEnabled: false" v-if="modelToShow == 'OBJ Model'">
      <a-entity scale=".1 .1 .1">
        <a-entity
          obj-model="obj: url(/3d/testHouseRotate.obj)"
          position="0 0 0"
          scale="0.1 0.1 0.1"
        ></a-entity>
      </a-entity>
      <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>


    <a-scene embedded arjs="trackingMethod: best; debugUIEnabled: false; sourceType: webcam" v-if="modelToShow == 'Vanilla'">
      <a-marker preset="hiro">
        <a-box position="0 0 0" material="color: blue;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>


    <!-- <a-scene v-if="modelToShow == 'OBJ Model'" background="color: #ECECEC">
      <a-entity>
        <a-entity camera="active: true" look-controls wasd-controls position="12 6 12"></a-entity>
        <a-entity
          obj-model="obj: url(/3d/testHouseRotate.obj)"
          position="0 0 0"
          scale="0.05 0.05 0.05"
        ></a-entity>
      </a-entity>
    </a-scene>

    <a-scene v-if="modelToShow == 'Vanilla'" background="color: #ECECEC">
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow></a-plane>
    </a-scene> -->

  </div>
</template>

<script>

export default {
  name: "ModelViewer",
  components: {},
  props: {
    modelPath: String
  },
  data: function() {
    return {
      object: null,
      container: null,
      scene: null,
      camera: null,
      renderer: null
    };
  },
  created() {
  },
  mounted() {
    // load ar.js script
    let arJsScript = document.createElement('script')
    arJsScript.setAttribute('src', 'https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js')
    document.head.appendChild(arJsScript)
  },
  computed: {
    modelToShow() {
      return this.$store.state.modelType;
    }
  },
  methods: {
    testClick() {
      console.log("MODEL PATH", this.modelPath);
    }
  }
};
</script>

<style>
/* #video {
  margin: 0;
  height: 100%; 
  overflow: hidden;
} */

/* canvas {
  width: 100%;
  height: 100%;
} */
</style>