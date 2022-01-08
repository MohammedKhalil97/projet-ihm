<template>
  <v-footer color="purple" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :to="link.route" :key="link" color="white" text rounded class="my-2">
        {{ link.name }}
      </v-btn>
      <v-col class="purple lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Khalil KASMI & Oussama KHEMIM</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {name: 'accueil', route: '/'},
      {name: 'vue d\'ensemble', route: '/overview'},
      {name: 'effectifs', route: '/employees'},
      {name: 'stations lorraine', route: '/stations-lorraine'},
      {name: 'objets trouvés', route: '/objects'},
      {name: 'couleurs des trains', route: '/colors'},
      {name: 'gares de voyageurs', route: '/stations'},
    ],
  }),
}
</script>
