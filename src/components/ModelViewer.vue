<template>
  <!-- <div>

  </div>-->
  <!--<h1 @click='testClick'>TEST COMPONENT INSIDE.</h1>-->
</template>

<script>
var THREE = require("three");
// var OBJLoader = require('three-obj-loader');
// OBJLoader(THREE);

export default {
  name: "ModelViewer",
  components: {},
  props: {
    modelPath: String
  },
  data: function() {
    return {
      object: null,
      container: null,
      scene: null,
      camera: null,
      renderer: null
    };
  },
  created() {
    this.fullScene();
  },
  mounted() {
    //this.fullScene();
  },
  methods: {
    testClick() {
      console.log("MODEL PATH", this.modelPath);
    },
    initTest() {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      var cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      var animate = function() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    },
    fullScene() {
      var OBJLoader = require("three-obj-loader");
      OBJLoader(THREE);
      var OrbitControls = require('three-orbit-controls')(THREE);

      var container;
      var camera, scene, renderer;
      var mouseX = 0,
        mouseY = 0;
      var windowHalfX = window.innerWidth / 2;
      var windowHalfY = window.innerHeight / 2;
      var object;
      var path = this.modelPath;
      var controls;
      //path = ('3d/male02.obj');
      init();
      animate();

      function init() {
        container = document.createElement("div");
        document.body.appendChild(container);
        camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          2000
        );
        camera.position.z = 250;
        // scene
        scene = new THREE.Scene();
        var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
        scene.add(ambientLight);
        var pointLight = new THREE.PointLight(0xffffff, 0.8);
        camera.add(pointLight);
        scene.add(camera);


        controls = new OrbitControls(camera);
        camera.lookAt(scene.position);
        controls.update();

        // manager
        function loadModel() {
          object.position.y = -95;
          scene.add(object);
          console.log("scene object", object);
        }

        var manager = new THREE.LoadingManager(loadModel);
        manager.onProgress = function(item, loaded, total) {
          console.log(item, loaded, total);
        };

        // model
        function onProgress(xhr) {
          if (xhr.lengthComputable) {
            var percentComplete = (xhr.loaded / xhr.total) * 100;
            console.log(
              "model " + Math.round(percentComplete, 2) + "% downloaded"
            );
          }
        }

        function onError(err) {
          console.log("obj load error", err);
        }

        var loader = new THREE.OBJLoader(manager);
        loader.load(
          path,
          function(obj) {
            console.log("MODEL PATH", path);
            object = obj;
          },
          onProgress,
          onError
        );

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        document.addEventListener("mousemove", onDocumentMouseMove, false);
        window.addEventListener("resize", onWindowResize, false);
      }

      function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 2;
        mouseY = (event.clientY - windowHalfY) / 2;
      }

      function animate() {
        // requestAnimationFrame(animate);
        // render();

        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }

      function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>