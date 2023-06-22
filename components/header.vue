<template>
  <v-app-bar>
    <v-app-bar-title>
      <h1 class="text-overline">My Portfolio</h1>
    </v-app-bar-title>
    <div class="" v-for="path in paths">
      <v-btn
        class="ma-2 w-fit-content"
        :to="path.to"
        :prepend-icon="path.icon"
        variant="text"
        :ripple="false"
        >{{ path.pathname }}</v-btn
      >
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">
const paths = [
  { to: '/', pathname: 'Home', icon: 'mdi-home' },
  // { to: "/blog", pathname: "Blog", icon: "" },
];
</script>
