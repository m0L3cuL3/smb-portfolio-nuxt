<template>
  <div class="main-section">
    <div class="bg-image d-flex flex-column justify-center align-center h-screen">
      <div class="headline" v-for="(item, index) in headClasses" :key="index">
        <h1 :class="item">Hi, I'm Sean Baang</h1>
      </div>

      <div class="type d-flex flex-row">
        <h2 class="t1 text-red-darken-1">
          Plan<span class="text-white">,</span>
        </h2>
        <h2 class="t2 text-blue-darken-1">
          Develop<span class="text-white">,</span>
        </h2>
        <h2 class="t3 text-green-darken-1">Deploy</h2>
      </div>
      <p class="subtitle text-center text-white">Junior DevOps & Backend Developer</p>
      <div class="buttons d-flex flex-row flex-wrap justify-center align-center mt-4">
        <v-btn class="mx-2 my-2" color="green darken-3" variant="flat" width="200" :ripple="false"
          prepend-icon="mdi-github" href="https://github.com/m0L3cuL3">Github</v-btn>
        <v-btn class="mx-2 my-2" color="blue darken-3" variant="flat" width="200" :ripple="false"
          prepend-icon="mdi-linkedin" href="https://www.linkedin.com/in/seanbaang">LinkedIn</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-section {
  background-color: #f0f0f0;
  color: #333;
}

.bg-image {
  background-image: url('/main.jpg');
  background-size: cover;
  background-position: center;
}

.headline {
  margin-bottom: 2rem;
}

.type {
  margin-top: 1rem;
}

.t1,
.t2,
.t3 {
  display: inline-block;
  font-weight: bold;
  margin-right: 10px;
  font-size: 1.5rem;
}

.subtitle {
  font-size: 1.2rem;
  font-weight: lighter;
  margin-top: 1rem;
}

.buttons {
  margin-top: 2rem;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';

const headClasses = [
  'text-h5 text-white text-uppercase text-wrap font-weight-bold mb-4 text-center d-flex d-sm-none',
  'text-h4 text-white text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-sm-flex d-md-none',
  'text-h3 text-white text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-md-flex d-lg-none',
  'text-h2 text-white text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-lg-flex d-xl-none',
  'text-h1 text-white text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-xl-flex',
];

const { $anime } = useNuxtApp();
var ml4: any = {};
onMounted(() => {
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  $anime
    .timeline({ loop: false })
    .add({
      targets: '.type .t1',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: '.type .t2',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: '.type .t3',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    });
});
</script>
