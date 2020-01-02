<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar class="red darken-2">
        <!--v-toolbar-side-icon></v-toolbar-side-icon-->
        <v-toolbar-title >Comic-Verse</v-toolbar-title>
        <v-menu :nudge-width="100">
        </v-menu>
        <v-spacer></v-spacer>
        <!--v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon color="primary" dark v-on="on">home</v-icon>
          </template>
          <span>Tooltip</span>
        </v-tooltip-->
        <!--<v-toolbar-items class="hidden-sm-and-down">>
        <router-link to="/">
         <v-button  
          class="yellow darken-2"
          large>
           Marvel
         </v-button>
        </router-link-->
        <v-btn
          color="deep-purple accent-4"
          background-color="yellow darken-2"
          text
          @click="goHome"
        >
          MARVEL
        </v-btn>
        <!--</v-toolbar-items>-->
        <!--v-text-field hide-details prepend-icon="search" single-line clearable>
          <template v-slot:label>
            Prueba a buscar un personaje aquí
          </template>
        </v-text-field-->
        <v-spacer></v-spacer>
        <div id= "search" v-if="id!=null">
          <v-text-field hide-details prepend-icon="search" single-line clearable>
            <template v-slot:label>
              Busca un personaje aquí
            </template>
          </v-text-field>
        </div>
        <div id= "router" v-if="id==null">
          <router-link to="/login" :idPassed='id'>Login</router-link> |
          <router-link to="/register">Register</router-link>
        </div>
        <div id= "router" v-else-if="id!=null">
          {{ id }}
        </div>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import 'material-design-icons-iconfont/dist/material-design-icons.css'
  import '@mdi/font/css/materialdesignicons.css'

  import Vue from 'vue'
  import Vuetify from 'vuetify/lib'

  Vue.use(Vuetify);

  export default {
    name: 'App',
    components: {
    },
    data: () => ({
      id: null,
    }),
    methods: {
      goHome () {
       this.$router.push("/");
      },
    },
  };
</script>