<template>
  <div>
    <ion-toolbar class="ToolbarVerde">
      <ion-buttons slot="secondary">
        <ion-button href='/'>
          <ion-icon src="/img/icons/home.svg"></ion-icon>
        </ion-button>
        <ion-button href='/ar-site'>
          <ion-icon src="/img/icons/business.svg"></ion-icon>
        </ion-button>
        <ion-button href='/ar-paper'>
          <ion-icon src="/img/icons/aperture.svg"></ion-icon>
        </ion-button>
        <ion-button href='/model-view'>
          <ion-icon src="/img/icons/cube.svg"></ion-icon>
        </ion-button>
        <ion-button href='/social-feed'>
          <ion-icon src="/img/icons/paper.svg"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button @click="toggleControls" color="secondary">
          <ion-icon slot="icon-only" name="more"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-list class="ControlVisible" v-if="this.showControls === true">
      <ion-item class="SliderStyle">
        <ion-range v-model="timeInput" min="0" max="23" color="danger" pin="true" @click="myMethod" ref="myid" @change="testClick">
          <ion-icon size="small" slot="start" src="/img/icons/sun.svg"></ion-icon>
        </ion-range>
      </ion-item>
      <ion-input class="TextStyle" :value="address" placeholder="Address" @input="address = $event.target.value"></ion-input>
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
        address: "",
      };
    },
    methods: {
      testClick() {
        alert("BUTTON CLICKED");
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

  .ControlVisible {
    width:100%;
    bottom: 18px;
    height: 70px;
    position: fixed;
  }

  .SliderStyle {
    font-size: 8px;
  }

  .TextStyle {
    width:100%;
    bottom: 30px;
    height: 60px;
    position: fixed;
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


