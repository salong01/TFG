<template>
  <v-app>
    <router-view />
    <v-app-bar app>
      
            
            <v-toolbar class="yellow darken-2">
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Comic-Verse</v-toolbar-title>
                    <v-menu :nudge-width="100">
                            <template v-slot:activator="{ on }">
                              <v-toolbar-title v-on="on">
                                <span>Categorías</span>
                                <v-icon dark>arrow_drop_down</v-icon>
                              </v-toolbar-title>
                            </template>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-icon color="primary" dark v-on="on">home</v-icon>
                            </template>
                            <span>Tooltip</span>
                          </v-tooltip>
                    <v-toolbar-items class="hidden-sm-and-down">
                      <v-btn flat>Marvel</v-btn>
                    </v-toolbar-items>
                    <v-text-field
                      hide-details
                      prepend-icon="search"
                      single-line
                      clearable
                    >
                    <template v-slot:label>
                        Prueba a buscar un personaje aquí
                      </template>
                    </v-text-field>
            </v-toolbar>
    </v-app-bar>

    <v-content>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './views/LoginView';

export default {
  name: 'App',
  components: {
    Login,
  },
  data: () => ({
    //
  }),
};
</script>
