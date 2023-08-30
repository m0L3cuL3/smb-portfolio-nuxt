<template>
  <div class="d-flex flex-column">
    <div class="bg-transparent d-flex flex-column justify-center align-center h-screen">
      <div v-for="item in headClasses">
        <h1 :class="item">Hi, I'm Sean Baang</h1>
      </div>

      <div class="type d-flex flex-row">
        <h2 class="t1 mr-2 text-red-darken-1">
          Plan<span class="text-white">,</span>
        </h2>
        <h2 class="t2 mr-2 text-blue-darken-1">
          Develop<span class="text-white">,</span>
        </h2>
        <h2 class="t3 mr-2 text-green-darken-1">Deploy</h2>
      </div>
      <p class="text-overline text-center">Junior DevOps & Backend Developer</p>
      <div class="d-flex flex-row flex-wrap justify-center align-center mt-2 w-50 h-25">
        <v-btn class="mx-1" color="green-darken-3" variant="flat" width="200" :ripple="false" prepend-icon="mdi-github"
          href="https://github.com/m0L3cuL3">Github</v-btn>
        <v-btn class="mx-1" color="blue-darken-3" variant="flat" width="200" :ripple="false" prepend-icon="mdi-linkedin"
          href="https://www.linkedin.com/in/seanbaang">LinkedIn</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const headClasses = [
  'text-h5 text-uppercase text-wrap font-weight-bold mb-4 text-center d-flex d-sm-none',
  'text-h4 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-sm-flex d-md-none',
  'text-h3 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-md-flex d-lg-none',
  'text-h2 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-lg-flex d-xl-none',
  'text-h1 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-xl-flex',
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
