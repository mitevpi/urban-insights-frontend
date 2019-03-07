<template>
  <div>
    <model-viewer id="model" modelPath="/3d/sfNormals.obj"></model-viewer>
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

<style>
#model {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
</style>
