<template>
  <div>
    <a-scene embedded arjs>
      <a-entity scale=".2 .2 .2">
        <a-entity
          obj-model="obj: url(/3d/testHouseRotate.obj)"
          position="0 0 0"
          scale="0.5 0.5 0.5"
        ></a-entity>
      </a-entity>
      <a-marker-camera preset="hiro"></a-marker-camera>
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