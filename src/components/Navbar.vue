<template>
  <div>

    <v-app-bar app color="white" elevation="3" dark>

      <div class="d-flex align-center">
        <router-link to="/">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain :src="require('../assets/logo.png')" transition="scale-transition" height="40"/>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" color="purple" text rounded>
        <span>Accueil</span>
      </v-btn>

      <v-btn to="/overview" color="purple" text rounded>
        <span>vue d'ensemble</span>
      </v-btn>

      <v-btn to="/employees" color="purple" text rounded>
        <span>effectifs</span>
      </v-btn>

      <v-btn to="/stations-lorraine" color="purple" text rounded>
        <span>stations lorraine</span>
      </v-btn>

      <v-btn to="/objects" color="purple" text rounded>
        <span>objets trouvés</span>
      </v-btn>

      <v-btn to="/colors" color="purple" text rounded>
        <span>couleurs des trains</span>
      </v-btn>

      <v-btn to="/stations" color="purple" text rounded>
        <span>Gares de voyageurs</span>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
  .v-btn {
    text-transform: capitalize;
  }
</style>
