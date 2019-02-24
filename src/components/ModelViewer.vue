<template>
   <h1 @click='testClick'>TEST COMPONENT INSIDE.</h1>
</template>

<script>

  export default {
    name: "ModelViewer",
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