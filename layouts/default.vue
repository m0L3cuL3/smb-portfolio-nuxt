<template>
  <v-main>
    <v-app-bar>
      <div class="w-100 d-flex justify-center">
        <div class="ma-1" v-for="path in paths">
          <v-btn
            :to="path.to"
            :prepend-icon="path.icon"
            variant="text"
            :ripple="false"
            >{{ path.pathname }}</v-btn
          >
        </div>
      </div>
    </v-app-bar>
    <slot />
    <v-footer></v-footer>
  </v-main>
</template>

<script setup lang="ts">
const paths = [
  { to: "/", pathname: "Home", icon: "mdi-home" },
  // { to: "/blog", pathname: "Blog", icon: "" },
];
</script>
