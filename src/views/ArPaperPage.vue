<template>
  <div>
    <!--<h1 @click='testClick'>TEST COMPONENT OUT SIDE.</h1>-->
    <!-- <h1>This is the page for rendering AR models on a local marker.</h1> -->
    <ArPaperViewer v-bind:vrMode="vrModeToggle" modelPath="/3d/testHouseRotate.obj"></ArPaperViewer>
  </div>
</template>

<script>
import ArPaperViewer from "@/components/ArPaperViewer.vue";

export default {
  name: "ArPaperPage",
  components: {
    ArPaperViewer
  },
  computed: {
    vrModeToggle() {
      return (this.$store.state.vrModeToggle == true);
    }
  },
  methods: {}
};
</script>