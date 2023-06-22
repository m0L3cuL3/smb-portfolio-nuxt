<template>
  <v-app theme="dark">
    <!-- <v-system-bar window color="orange-lighten-1">
      <v-spacer></v-spacer>
      <h1 class="text-overline">Currently in development</h1>
      <v-spacer></v-spacer>
    </v-system-bar> -->
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>
