<template>
  <div id="video"></div>
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
  },
  methods: {
    testClick() {
      console.log("MODEL PATH", this.modelPath);
    },
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