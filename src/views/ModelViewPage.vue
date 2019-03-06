<template>
  <div>
    <model-viewer modelPath="/3d/sfNormals.obj"></model-viewer>
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