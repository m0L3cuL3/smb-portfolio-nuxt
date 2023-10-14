<template>
  <v-footer class="d-flex flex-column text-center justify-center py-auto">
    <div class="d-flex justify-center align-center w-100 py-auto">
      <h1 class="text-overline font-weight-thin">
        Powered by <span class="font-italic font-weight-black">Nuxt</span> &
        <span class="font-italic font-weight-black">DigitalOcean</span>.
      </h1>
    </div>

    <div class="py-1 text-caption">
      &copy; {{ new Date().getFullYear() }} Sean Baang - Contact me at <a class="font-weight-bold"
        href="mailto:dev.seanbaang@gmail.com">dev.seanbaang@gmail.com</a>
    </div>
  </v-footer>
</template>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>