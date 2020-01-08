<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar class="red darken-2">
        <!--v-toolbar-side-icon></v-toolbar-side-icon-->
        <v-img
          class="mx-2"
          :src="require('../public/img/MarvelLogo.jpg')"
          max-height="100"
          max-width="100"
          contain
        ></v-img>
        <v-menu :nudge-width="100" />
        <v-spacer />
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
        <v-icon>home</v-icon>
        <v-btn color="lime darken-1" text @click="goHome">
          Comic-verse
        </v-btn>
        <!--</v-toolbar-items>-->
        <!--v-text-field hide-details prepend-icon="search" single-line clearable>
          <template v-slot:label>
            Prueba a buscar un personaje aquí
          </template>
        </v-text-field-->
        <v-spacer />
        <div id="router" v-if="id == null">
          <router-link to="/login" :idPassed="id">Login</router-link> |
          <router-link to="/register">Register</router-link>
        </div>
        <!-- v-else-if="id != null" v-if="heropage == false" v-if="comicpage == false" -->
        <div id="router" v-else>
          <v-btn id="heroButton" @click="goHeroes">Heroes</v-btn>
          <v-btn id="comicButton" @click="goComics">Comics</v-btn>
          <!-- <div>
            <v-text-field
              hide-details
              prepend-icon="search"
              single-line
              clearable
            >
              <template v-slot:label>
                Busca un personaje aquí
              </template>
            </v-text-field>
          </div> -->
          Hola, {{ id }}
        </div>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <router-view @UserID="saveUser" />
    </v-content>
  </v-app>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default {
  name: "App",
  components: {},
  data: () => ({
    id: null,
    comicpage: false,
    heropage: false
  }),
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goHeroes() {
      this.$router.push("/heroes");
    },
    goComics() {
      this.$router.push("/comics");
    },
    saveUser(id) {
      this.id = id;
    }
  }
};
</script>
