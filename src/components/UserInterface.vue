<template>
  <div>
    <ion-toolbar class="ToolbarVerde">
      <ion-buttons slot="secondary">
        <ion-button href='/'>
          <!-- <ion-icon slot="icon-only" name="home"></ion-icon> -->
          <ion-icon src="/img/icons/home.svg"></ion-icon>
        </ion-button>
        <ion-button href='/ar-site'>
          <!-- <ion-icon slot="icon-only" name="business"></ion-icon> -->
          <ion-icon src="/img/icons/business.svg"></ion-icon>
        </ion-button>
        <ion-button href='/ar-paper'>
          <!-- <ion-icon slot="icon-only" name="aperture"></ion-icon> -->
          <ion-icon src="/img/icons/aperture.svg"></ion-icon>
        </ion-button>
        <ion-button href='/model-view'>
          <!-- <ion-icon slot="icon-only" name="cube"></ion-icon> -->
          <ion-icon src="/img/icons/cube.svg"></ion-icon>
        </ion-button>
        <ion-button href='/social-feed'>
          <!-- <ion-icon slot="icon-only" name="paper"></ion-icon> -->
          <ion-icon src="/img/icons/paper.svg"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button @click="toggleControls" color="secondary">
          <ion-icon slot="icon-only" name="more"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-list class="SliderVisible" v-if="this.showControls === true">
      <ion-item >
        <ion-range v-model="timeInput" min="0" max="23" color="danger" pin="true" @click="myMethod" ref="myid">
          <ion-icon size="small" slot="start" src="/img/icons/sun.svg"></ion-icon>
          <!--<ion-label slot="start">-200</ion-label>-->
          <!--<ion-label item-right text-right slot="end">200</ion-label>-->
        </ion-range>
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
  export default {
    name: "UserInterface",
    props: {},
    data: function () {
      return {
        showControls: false,
        timeInput: 0,
      };
    },
    methods: {
      testClick() {
        alert("BUTTON CLICKED");
        //console.log(imageSrc);
        //this.$router.push({ name: "post", params: { imageSrc } });
      },
      toggleControls() {
        this.showControls = this.showControls === false;
        console.log('CONTROLS STATE', this.showControls)
      },
      myMethod() {
        console.log(this.$refs["myid"]);
        console.log(this.$refs.myid.getAttribute('class'));
        // console.log(event)
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
  .SliderVisible {
    width:100%;
    bottom: 18px;
    height: 60px;
    position: fixed;
    font-size: 8px;
  }

  ion-button {
    padding-top: 10px;
    padding-bottom: 30px;
  }

  ion-icon {
    font-size: 35px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>


