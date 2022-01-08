<template>

  <v-container fluid class="stations-lorraine">

    <v-card color="basil">

      <v-card-title class="mb-2">
        Codes couleur des lignes Transilien <span class="text--secondary ml-1">({{data.data.nhits}})</span>
        <v-spacer></v-spacer>
        <v-text-field v-if="tab == 0" v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line hide-details solo dense></v-text-field>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="black" grow>
        <v-tab>Table</v-tab>
        <v-tab>Couleurs</v-tab>
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
          <v-container fluid>
            <v-row>
              <v-col cols="3" v-for="color in data.data.records">
                <v-card :color="color.fields.code_hexadecimal" flat class="mx-auto" elevation="1" dark>
                  <v-card-text>
                    <h3>{{ color.fields.ligne }}</h3>
                    <h5 class="font-weight-regular">{{ color.fields.couleur_proche }}</h5>
                    <h3 class="font-weight-regular my-1 text-uppercase">{{ color.fields.code_hexadecimal }}</h3>
                    <h3 class="font-weight-regular my-1">
                      rgb ({{ color.fields.code_rvb_rouge }}, {{ color.fields.code_rvb_vert }}, {{ color.fields.code_rvb_bleu }})
                    </h3>

                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>

    </v-card>

  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // Data Vars
      data: [],
      link: 'https://data.sncf.com/api/records/1.0/search/?dataset=codes-couleur-des-lignes-transilien&q=&rows=16&sort=ligne&facet=ligne',
      search: '',
      headers: [
        { text: 'ligne', value: 'fields.ligne' },
        { text: 'couleur_proche', value: 'fields.couleur_proche' },
        { text: 'code_hexadecimal', value: 'fields.code_hexadecimal' },
        { text: 'code_rvb_rouge', value: 'fields.code_rvb_rouge' },
        { text: 'code_rvb_vert', value: 'fields.code_rvb_vert' },
        { text: 'code_rvb_bleu', value: 'fields.code_rvb_bleu' },
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
