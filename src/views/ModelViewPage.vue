<template>
  <div>
    <!--<h1>This is the page for rendering models on the phone without AR/VR.</h1>-->
    <!-- <model-viewer modelPath="../../public/3d/Bloxhub_superclean.obj"></model-viewer> -->
    <model-viewer modelPath="3d/male02.obj"></model-viewer>
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