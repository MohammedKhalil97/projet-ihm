<template>

  <v-container fluid class="stations-lorraine">

    <v-card color="basil">

      <v-card-title class="mb-2">
        Effectifs disponibles GPF SNCF depuis 1851 <span class="text--secondary ml-1">({{data.data.nhits}})</span>
        <v-spacer></v-spacer>
        <v-text-field v-if="tab == 0" v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line hide-details solo dense></v-text-field>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="black" grow>
        <v-tab>Table</v-tab>
        <v-tab>Graph</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card color="basil" flat>
            <v-card-text>
              <v-data-table :headers="headers" :items="data.data.records" :search="search" :items-per-page="10" class="elevation-1"></v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card color="basil" max-width="60%" flat class="mx-auto">
            <v-card-text>
              <v-card class="mx-auto text-center" color="white">

                <v-card-text>
                  <div class="text-h5 font-weight-light">
                    Évolution de l'effectif SNCF lors des 12 denières années
                  </div>
                </v-card-text>

                <v-card-text>
                  <v-sheet color="purple" class="white--text">
                    <v-sparkline color="white" :labels="labels" :value="value" height="100" padding="12" line-width="1" stroke-linecap="round" smooth>
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>

              </v-card>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>

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
      link: 'https://data.sncf.com/api/records/1.0/search/?dataset=effectifs-disponibles-sncf-depuis-1851&q=&rows=170&sort=date',
      search: '',
      headers: [
        { text: 'recordid', value: 'recordid' },
        { text: 'date', value: 'fields.date' },
        { text: 'effectif', value: 'fields.effectif_sncf' },
      ],
      // Tab Vars
      tab: null,
      // chart data
      labels: [],
      value: [],
    };
  },
  methods: {
  },
  mounted() {
    axios.get(this.link).then(response => (this.data = response)).finally( () => {
      for (let i = 12; i >= 0; i--) {
        let date = this.data.data.records[i].fields.date
        let eff = this.data.data.records[i].fields.effectif_sncf
        this.labels.push(date)
        this.value.push(eff)
      }
    })
  }
};
</script>

<style scoped>

</style>
