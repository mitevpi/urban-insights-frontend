<template>
  <div>
    <!--<h1 @click='testClick'>TEST COMPONENT OUT SIDE.</h1>-->
    <!-- <h1>This is the page for rendering AR models on a local marker.</h1> -->
    <ArPaperViewer modelPath="../../public/3d/Bloxhub_superclean.obj"></ArPaperViewer>
  </div>
</template>

<script>
import ArPaperViewer from "@/components/ArPaperViewer.vue";

export default {
  name: "ArPaper",
  components: {
    ArPaperViewer
  },
  methods: {
    testClick() {
      var temp = require('../../public/manifest.json');
      console.log(temp);
    }
  }
};
</script>