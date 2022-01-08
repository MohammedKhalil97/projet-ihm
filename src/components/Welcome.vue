<template>
  <v-container class="py-12">
 
    <v-row align="center" justify="space-between">
      <v-col cols="8">
        <h1 class="font-weight-black">PROJET <br> DATA <span class="purple--text">VISUALISATION</span></h1>
        <p class="text-justify my-6">
        Ce projet, à réaliser en binôme, a pour but de mettre en pratique tout ce qu’on a vu lors des cours d’IHM, aussi bien en termes d’UX que de développement web Front. Cette application contient plusieurs interfaces de visualisation (tableau, map, courbes) , qui permettent de visualiser en temps réel plusieurs statistiques  concernant les données de la société SNCF depuis sa création.
     
        </p>
        <v-btn color="purple" dark rounded large>
          description du projet
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-img :src="require('../assets/hero.svg')" class="my-3" contain width="100%"/>
      </v-col>
    </v-row>
 
    <v-row align="center" justify="space-between" class="mt-12">
      <v-col cols="12">
        <h1 class="text-capitalize mb-4">Technologies utilisées</h1>
      </v-col>
      <v-col cols="2">
        <v-img contain src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1200px-Leaflet_logo.svg.png" height="80"></v-img>
      </v-col>
      <v-col cols="2">
        <v-img contain src="https://camo.githubusercontent.com/357f56184da9de32ccc85e38e79836b6431abacb53d2119abff708966d528657/68747470733a2f2f63646e2e767565746966796a732e636f6d2f646f63732f696d616765732f6c6f676f732f767565746966792d6c6f676f2d6c696768742d746578742e737667" height="80"></v-img>
      </v-col>
      <v-col cols="2">
        <v-img contain src="https://www.coqpit.fr/wp-content/uploads/2019/05/vuejs-wide.png" height="80"></v-img>
      </v-col>
      <v-col cols="2">
        <v-img contain src="https://miro.medium.com/max/783/1*NuPc-wv4AqMor-L34WKwjg.png" height="80"></v-img>
      </v-col>
      <v-col cols="2">
        <v-img contain src="https://raw.githubusercontent.com/adireddy/haxe-chart/master/logo.png" height="80"></v-img>
      </v-col>
    </v-row>
 
    <v-row class="mt-12">
      <v-col cols="5">
        <v-img contain :src="require('../assets/list.svg')" width="100%"></v-img>
      </v-col>
      <v-col cols="7">
        <h1 class="text-capitalize mb-4">fonctionnalites</h1>
        <ul>
          <li>Des statistiques sur l'effectif de SNCF depuis sa création</li>
          <li>Des infos sur toutes les gars de la région Lorraine avec également la possibilité d'effectuer une rechercher par id,nom,latitude et longitude.</li>
          <li> Map avec l’emplacement de toutes les gares en france ainsi que les données relatives a chaque gare.</li>
          <li>Moteur de recherche.</li>
          <li>liste d’objets trouvés dans une période donnée (classé par id, date, type et nature de chaque objet . . . )</li>
          <li>Statistiques sur les nombres de trains annulés/en retard (nombres de trains, heures cumulées. . . )</li>
          <li>Des statistiques d'utilisation data.sncf.com(nbre de nb_de_telechargements...)</li>
        </ul>
      </v-col>
    </v-row>
 
    <v-row align="center" class="mt-12">
      <v-col cols="12">
        <h1 class="text-capitalize">procedures d'installation</h1>
      </v-col>
      <v-col cols="12">
        <h3 class="mb-2">Project setup</h3>
        <code class="pa-4" style="display: inline-block; width: 100%;">
          npm install
        </code>
      </v-col>
      <v-col cols="12">
        <h3 class="mb-2">Compiles and hot-reloads for development</h3>
        <code class="pa-4" style="display: inline-block; width: 100%;">
          npm run serve
        </code>
      </v-col>
      <v-col cols="12">
        <h3 class="mb-2">Compiles and minifies for production</h3>
        <code class="pa-4" style="display: inline-block; width: 100%;">
          npm run build
        </code>
      </v-col>
    </v-row>
 
  </v-container>
</template>
 
<script>
  export default {
    name: 'HelloWorld',
 
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>