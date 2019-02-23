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
  }
};
</script>
