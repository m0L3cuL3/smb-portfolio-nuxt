<template>
  <div class="w-100 h-100">
    <section
      class="bg-grey-darken-4 h-50 d-flex flex-column justify-center align-center"
    >
      <h1
        class="text-h4 text-uppercase text-wrap font-weight-bold mb-4 text-center d-flex d-sm-none"
      >
        Hi, I'm Sean Baang
      </h1>
      <h1
        class="text-h3 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-md-flex d-lg-none"
      >
        Hi, I'm Sean Baang
      </h1>
      <h1
        class="text-h2 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-lg-flex d-xl-none"
      >
        Hi, I'm Sean Baang
      </h1>
      <h1
        class="text-h1 text-uppercase text-wrap font-weight-bold mb-4 text-center d-none d-xl-flex"
      >
        Hi, I'm Sean Baang
      </h1>
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
      <div
        class="d-flex flex-row flex-wrap justify-center align-center mt-2 w-50 h-25"
      >
        <v-btn
          color="blue-darken-4"
          variant="flat"
          width="150"
          :ripple="false"
          prepend-icon=""
          >Contact Me!</v-btn
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

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
