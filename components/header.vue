<template>
  <v-app-bar app dark>
    <v-app-bar-title>
      <h1 class="text-overline text-white font-weight-bold">My Portfolio</h1>
    </v-app-bar-title>
    <div class="" v-for="path in paths">
      <v-btn class="ma-2" :to="path.to" :prepend-icon="path.icon" text-color="white" :ripple="false">{{ path.pathname
      }}</v-btn>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  /* Add a subtle shadow to the app bar */
}

.text-white {
  color: #fff;
  /* White text color */
}
</style>

<script setup lang="ts">
const paths = [
  { to: '/', pathname: 'Home', icon: 'mdi-home' },
  { to: "/blog", pathname: "Blog", icon: "" },
];
</script>
