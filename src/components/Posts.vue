<template>
  <div class="posts">
    <ion-scroll>
      <ion-list>
        <ion-item
          v-for="post in posts"
          :key="post.data.id"
          @click="handleClick(post.data.preview.images[0].source.url)"
        >
          <ion-img :src="post.data.thumbnail" alt="thumb" class="thumbnail"></ion-img>
          <ion-label>{{post.data.title}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-scroll>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  props: {
    msg: String
  },
  mounted() {
    axios.get("https://www.reddit.com/r/aww.json?raw_json=1").then(response => {
      //console.log(response.data.data.children);
      this.posts = response.data.data.children.slice(0, 8);
    });
  },
  data() {
    return {
      myInput: "",
      posts: []
    };
  },
  methods: {
    handleClick(imageSrc) {
      //alert(this.myInput);
      console.log(imageSrc);
      this.$router.push({ name: "post", params: { imageSrc } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>