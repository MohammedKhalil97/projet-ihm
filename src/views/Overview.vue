<template>
  <v-container fluid>

    <v-row>

      <v-col cols="3">
        <v-card elevation="1" color="deep-orange" class="py-4">
          <v-card-text class="white--text">
            <h1 class="font-weight-medium mb-3">Gares de voyageurs</h1>
            <h2>{{ stations.toLocaleString() }}</h2>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card elevation="1" color="blue-grey" class="py-4">
          <v-card-text class="white--text">
            <h1 class="font-weight-medium mb-3">Déclarations de perte</h1>
            <h2>{{ declarations.toLocaleString() }}</h2>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card elevation="1" color="light-blue" class="py-4">
          <v-card-text class="white--text">
            <h1 class="font-weight-medium mb-3">Objets Trouvés</h1>
            <h2>{{ found.toLocaleString() }}</h2>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card elevation="1" color="teal" class="py-4">
          <v-card-text class="white--text">
            <h1 class="font-weight-medium mb-3">Gares équipées de WIFI</h1>
            <h2>{{ wifi.toLocaleString() }}</h2>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title class="mb-2">
            Statistiques d'utilisation data.sncf.com
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line hide-details solo dense></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="api" :search="search" :items-per-page="8"></v-data-table>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>
            Gares de voyageurs en France
          </v-card-title>
          <v-card-text>
            <div style="height: 100%; width: 100%">
              <l-map style="height: 400px" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker v-for="(m,i) in markerLatLng" :lat-lng="markerLatLng[i]"></l-marker>
              </l-map>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Codes couleur des lignes Transilien
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3" v-for="train in trains">
                <v-card :color="train.fields.code_hexadecimal" flat class="mx-auto" elevation="1" dark>
                  <v-card-text>
                    <h3>{{ train.fields.ligne }}</h3>
                    <h5 class="font-weight-regular">{{ train.fields.couleur_proche }}</h5>
                    <h3 class="font-weight-regular my-1 text-uppercase">{{ train.fields.code_hexadecimal }}</h3>
                    <h3 class="font-weight-regular my-1">
                      rgb ({{ train.fields.code_rvb_rouge }}, {{ train.fields.code_rvb_vert }}, {{ train.fields.code_rvb_bleu }})
                    </h3>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';

import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: "Overview",
  components: {LMap, LTileLayer, LMarker},
  data() {
    return {

      // Data Vars
      stations: '',
      declarations: '',
      found: '',
      wifi: '',
      api: [],
      trains: [],
      stations_location: [],

      // Api Vars
      link_stations: 'https://data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=&rows=0&sort=gare_alias_libelle_noncontraint',
      link_declarations: 'https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-gares&q=&rows=0&sort=date',
      link_found: 'https://data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&q=&rows=0&sort=date',
      link_wifi: 'https://data.sncf.com/api/records/1.0/search/?dataset=gares-equipees-du-wifi&q=&sort=nom_de_la_gare&facet=nom_de_la_gare&facet=service_wifi&refine.service_wifi=Oui',
      link_api: 'https://data.sncf.com/api/records/1.0/search/?dataset=statistiques-dutilisation-datasncfcom&q=&rows=24&sort=mois&facet=mois',
      link_trains: 'https://data.sncf.com/api/records/1.0/search/?dataset=codes-couleur-des-lignes-transilien&q=&rows=16&sort=ligne&facet=ligne',
      link_stations_location: 'https://data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=&rows=200&sort=gare_alias_libelle_noncontraint',

      // Table Vars
      search: '',
      headers: [
        { text: 'mois', value: 'fields.mois' },
        { text: 'nb_de_telechargements', value: 'fields.nb_de_telechargements' },
        { text: 'nb_appels_api', value: 'fields.nb_appels_api' },
        { text: 'appels_api_par_utilisateur', value: 'fields.appels_api_par_utilisateur' },
        { text: 'jeu_de_donnees_le_plus_appele', value: 'fields.jeu_de_donnees_le_plus_appele' },
      ],

      // Map Vars
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OSM</a> contributors',
      zoom: 5,
      center: [46.232192999999995,2.209666999999996],
      markerLatLng: [],

    }
  },
  mounted() {
    axios.get(this.link_stations).then(response => (this.stations = response.data.nhits))
    axios.get(this.link_declarations).then(response => (this.declarations = response.data.nhits))
    axios.get(this.link_found).then(response => (this.found = response.data.nhits))
    axios.get(this.link_wifi).then(response => (this.wifi = response.data.nhits))
    axios.get(this.link_api).then(response => (this.api = response.data.records))
    axios.get(this.link_trains).then(response => (this.trains = response.data.records))
    axios.get(this.link_stations_location).then(response => (this.stations_location = response.data.records)).finally( () => {
      for (let i = 0; i < this.stations_location.length; i++) {
        let lat= this.stations_location[i].geometry.coordinates[0]
        let long= this.stations_location[i].geometry.coordinates[1]
        this.markerLatLng.push([long,lat])
      }
    })
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
}
</script>

<style scoped>

</style>
