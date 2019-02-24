<template>
  <div>
    <ion-toolbar class="ToolbarVerde">
      <ion-buttons slot="secondary">
        <ion-button href="/">
          <ion-icon src="/img/icons/home.svg"></ion-icon>
        </ion-button>
        <ion-button href="/ar-site">
          <ion-icon src="/img/icons/business.svg"></ion-icon>
        </ion-button>
        <ion-button href="/ar-paper">
          <ion-icon src="/img/icons/aperture.svg"></ion-icon>
        </ion-button>
        <ion-button href="/model-view">
          <ion-icon src="/img/icons/cube.svg"></ion-icon>
        </ion-button>
        <ion-button href="/social-feed">
          <ion-icon src="/img/icons/paper.svg"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button @click="toggleControls(); getSliderValue();" color="secondary">
          <ion-icon slot="icon-only" name="more"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-list class="ControlVisible" v-if="this.showControls === true">
      <ion-item class="SliderStyle">
        <ion-range
          id="timeId"
          :value="timeInput"
          value="8"
          min="0"
          max="23"
          color="danger"
          pin="true"
          @click="getSliderValue(); getSunVector();"
          ref="myid"
          @change="timeInput = $event.target.value"
        >
          <ion-icon size="small" slot="start" src="/img/icons/sun.svg"></ion-icon>
        </ion-range>
      </ion-item>
      <ion-input
        class="TextStyle"
        :value="address"
        placeholder="Address"
        @input="address = $event.target.value"
      ></ion-input>
    </ion-list>
    <!-- <ion-item class="ModelSelectStyleParent" v-if="this.showControls">
      <ion-label>Models</ion-label>
      <ion-select
        @click="testClick"
        class="ModelSelectStyle"
        placeholder="Select Model"
        :value="modelPick"
      >
        <ion-select-option @click="testClick" value="3d/testHouseRotate.obj">House</ion-select-option>
        <ion-select-option value="3d/SANF_output_rhino_flipped.obj">City</ion-select-option>
      </ion-select>
    </ion-item> -->
  </div>
</template>

<script>
var axios = require('axios')
export default {
  name: "UserInterface",
  props: {},
  data: function() {
    return {
      showControls: false,
      timeInput: 0,
      address: "",
      modelPick: ""
    };
  },
  computed: {},
  methods: {
    testClick() {
      //alert("BUTTON CLICKED");
      console.log(this);
    },
    toggleControls() {
      this.showControls = this.showControls === false;
      console.log("CONTROLS STATE", this.showControls);
    },
    getSliderValue() {
      // let myRef = this.$refs["myid"];
      // let props = this.$refs.myid.getAttributeNames();
      let elem = document.getElementById("timeId");
      let shadow = elem.shadowRoot;
      let childNodes = Array.from(shadow.childNodes);
      let vals = [];

      childNodes.forEach(function(s) {
        if (s.nodeName === "DIV") {
          let currentVal = (s.nodeName,
          s.attributes[0].ownerElement.children[2].attributes["aria-valuenow"]);
          //console.log(typeof currentVal.value, currentVal.value);
          vals.push(currentVal.value);
          // for (var p in currentVal) {
          //   console.log(p)
          // }
        }
      });

      console.log(vals);
      this.timeInput = parseInt(vals[0]);
    },
    getSunVector() {
      axios({
        method: "get",
        url: "http://127.0.0.1:5000/getSunVector",
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        data: {
          address: this.address,
          month: 6,
          day: 21,
          hour: this.timeInput
        }
      }).then(response => {
      console.log(response);
    }).catch(err => console.log(err));
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
  width: 100%;
  bottom: 18px;
  height: 70px;
  position: fixed;
}

.SliderStyle {
  font-size: 8px;
}

.TextStyle {
  width: 100%;
  bottom: 30px;
  height: 60px;
  position: absolute;
}

.ModelSelectStyle {
  bottom: 80px;
  height: 60px;
  width: 100%;
  position: fixed;
}
.ModelSelectStyleParent {
  width: 100%;
  max-width: 100% !important;
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


