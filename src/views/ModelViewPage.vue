<template>
  <div>
    <!-- <model-viewer modelPath="3d/male02.obj"></model-viewer> -->
    <model-viewer modelPath="3d/testHouse.obj"></model-viewer>
  </div>
</template>

<script>
  import ModelViewer from "@/components/ModelViewer.vue";

  export default {
    name: "ModelView",
    components: {
      ModelViewer
    }
  };
</script>