<template>

  <v-container fluid class="stations-lorraine">

    <v-card color="basil">

      <v-card-title class="mb-2">
        Stations region lorraine <span class="text--secondary ml-1">({{data.data.nhits}})</span>
        <v-spacer></v-spacer>
        <v-text-field v-if="tab == 0" v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line hide-details solo dense></v-text-field>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="black" grow>
        <v-tab>Table</v-tab>
        <v-tab>Map</v-tab>
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
          <v-card color="basil" flat>
            <v-card-text>
              <div style="height: 100%; width: 100%">
                <l-map style="height: 400px" :zoom="zoom" :center="center">
                  <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                  <l-marker v-for="(m,i) in markerLatLng" :lat-lng="markerLatLng[i]"></l-marker>
                </l-map>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>

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
  name: "StationsLorraine",
  components: {LMap, LTileLayer, LMarker},
  data() {
    return {
      // Data Vars
      data: [],
      link: 'https://data.sncf.com/api/records/1.0/search/?dataset=osm-mapping-lorraine&q=&rows=500',
      search: '',
      headers: [
        { text: 'id', value: 'fields.id' },
        { text: 'name', value: 'fields.name' },
        { text: 'long', value: 'geometry.coordinates[0]' },
        { text: 'lat', value: 'geometry.coordinates[1]' },
      ],
      // Map Vars
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OSM</a> contributors',
      zoom: 8,
      center: [48.8744,6.2081],
      markerLatLng: [],

      // Tab Vars
      tab: null,

    };
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
  mounted() {
    axios.get(this.link).then(response => (this.data = response)).finally( () => {
      for (let i = 0; i < this.data.data.records.length; i++) {
        let lat= this.data.data.records[i].geometry.coordinates[0]
        let long= this.data.data.records[i].geometry.coordinates[1]
        this.markerLatLng.push([long,lat])
      }
    })
  }
};
</script>

<style scoped>

</style>
