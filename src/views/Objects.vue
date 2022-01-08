<template>

  <v-container fluid class="objects">

    <v-row>
      <v-col cols="12">
        <v-card color="basil">

          <v-card-title class="mb-2">
            Objets trouvés <span class="text--secondary ml-1">({{data.data.nhits}})</span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line hide-details solo dense></v-text-field>
          </v-card-title>

          <v-card-text>
            <v-data-table :headers="headers" :items="data.data.records" :search="search" :items-per-page="10" class="elevation-1"></v-data-table>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "StationsLorraine",
  data() {
    return {
      // Data Vars
      data: [],
      link: 'https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=100&sort=date',
      search: '',
      headers: [
        { text: 'recordid', value: 'recordid' },
        { text: 'gc_obo_type_c', value: 'fields.gc_obo_type_c' },
        { text: 'gc_obo_nature_c', value: 'fields.gc_obo_nature_c' },
        { text: 'date', value: 'fields.date' },
        { text: 'gc_obo_gare_origine_r_name', value: 'fields.gc_obo_gare_origine_r_name' },
      ],
      // Tab Vars
      tab: null,
    };
  },
  methods: {
  },
  mounted() {
    axios.get(this.link).then(response => (this.data = response))
  }
};
</script>

<style scoped>

</style>
