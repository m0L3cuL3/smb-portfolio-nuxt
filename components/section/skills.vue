<template>
  <h1 class="text-center mb-6">Skills</h1>
  <div class="d-flex flex-row justify-center">
    <div class="d-flex flex-column mx-4">
      <h1 class="text-h5 text-overline">Programming Languages</h1>
      <v-list>
        <v-card
          v-for="item in programmingLanguages"
          :key="item.title"
          :title="item.title"
          subtitle="Lorem Ipsum"
          class="bg-grey-darken-2 my-1"
        ></v-card>
      </v-list>
    </div>
    <div class="d-flex flex-column mx-4">
      <h1 class="text-h5 text-overline">Developer Tools</h1>
      <v-list>
        <v-card
          v-for="item in devTools"
          :key="item.title"
          :title="item.title"
          class="bg-grey-darken-2 my-1"
        ></v-card>
      </v-list>
    </div>
  </div>
</template>

<script setup lang="ts">
const programmingLanguages = [
  { title: 'Typescript' },
  { title: 'VueJS' },
  { title: 'Angular' },
  { title: 'Python' },
  { title: 'C++' },
  { title: 'C#' },
  { title: 'Lua Script' },
  { title: 'PHP' },
  { title: 'NuxtJS' },
];
const devTools = [{ title: 'VSCode' }, { title: 'Github' }];
</script>
