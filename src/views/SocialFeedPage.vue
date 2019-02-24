<template>
  <div class="home">
    <ion-scroll>
      <Posts/>
    </ion-scroll>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";

export default {
  name: "SocialFeed",
  components: {
    Posts
  },
  data: function() {
    return {
      forgeFiles: null,
      forgeKeys: null
    };
  },
  computed: {
    fileData() {
      return this.$store.getters.fileData;
    },
    keyData() {
      return this.$store.getters.keys;
    }
  },
  created() {
    // load data for main viz
    this.$store.dispatch('initFileData');
  },
  watch: {
    fileData: function(newData) {
      this.forgeFiles = newData;
    },
    keyData: function(newData) {
      this.forgeKeys = newData;
    }
  }
};
</script>
