<template>
  <v-app id="app">

    <Navbar />

    <v-main class="grey lighten-5">
      <router-view/>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Navbar, Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Questrial");

#app, .display-2 {
  font-family: 'Montserrat', sans-serif;
}
</style>
