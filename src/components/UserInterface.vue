<template>
  <div>
    <ion-toolbar class="ToolbarVerde">
      <ion-buttons slot="secondary">
        <ion-button href='/'>
          <ion-icon slot="icon-only" name="home"></ion-icon>
          <!-- <ion-icon src="/public/img/icons/home.svg"></ion-icon> -->
        </ion-button>
        <ion-button href='/ar-site'>
          <ion-icon slot="icon-only" name="business"></ion-icon>
        </ion-button>
        <ion-button href='/ar-paper'>
          <ion-icon slot="icon-only" name="aperture"></ion-icon>
        </ion-button>
        <ion-button href='/model-view'>
          <ion-icon slot="icon-only" name="cube"></ion-icon>
        </ion-button>
        <ion-button href='/social-feed'>
          <ion-icon slot="icon-only" name="paper"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button @click="testClick" color="secondary">
          <ion-icon slot="icon-only" name="more"></ion-icon>
        </ion-button>
      </ion-buttons>
      <!-- <ion-title>Nav</ion-title> -->
    </ion-toolbar>
  </div>
</template>

<script>
export default {
  name: "UserInterface",
  props: {},
  methods: {
    testClick() {
      alert("BUTTON CLICKED");
      //console.log(imageSrc);
      //this.$router.push({ name: "post", params: { imageSrc } });
    }
  }
};
</script>

<style>
.ToolbarVerde {
  --padding-top: 0px !important;
  --padding-start: 0px !important;
  --padding-right: 0px !important;
  --padding-end: 0px !important;
}
</style>


