<!--suppress ALL -->
<template>
  <!-- <h1 @click='testClick'>TEST COMPONENT INSIDE.</h1> -->
  <div class="scene3d" style="width:100%; height:100%;">
    <a-scene
      embedded
      arjs="sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3; debugUIEnabled: false;"
      vr-mode-ui="enabled: false"
    >
      <a-assets>
        <!-- <a-asset-item id="city" :src="modelPath"></a-asset-item> -->
        <a-asset-item id="obj-model" :src="modelPath"></a-asset-item>
      </a-assets>

      <a-marker-camera preset="custom" type="pattern" url="../../public/3d/pattern-marker.patt">
        <!-- <a-entity collada-model="#city" position="0 0 0" scale="0.5 0.5 0.5"></a-entity> -->
        <a-entity obj-model="obj: #obj-model"></a-entity>
      </a-marker-camera>
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