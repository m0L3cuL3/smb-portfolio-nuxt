<template>
  <h1 class="text-center mb-6">Skills</h1>
  <div class="d-flex flex-row flex-wrap justify-space-evenly">
    <v-card
      v-for="item in programmingLanguages"
      :key="item.title"
      :title="item.title"
      subtitle="Lorem Ipsum"
      class="bg-grey-darken-2 ma-2"
    ></v-card>
  </div>
</template>

<script setup lang="ts">
const programmingLanguages = [
  { title: "Typescript" },
  { title: "VueJS" },
  { title: "Angular" },
  { title: "Python" },
  { title: "C++" },
  { title: "C#" },
  { title: "Lua Script" },
  { title: "PHP" },
  { title: "NuxtJS" },
  { title: "MySQL" },
  { title: "GraphQL" },
];
</script>
