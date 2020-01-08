<template>
  <v-container>
    <!--v-for="(hero, i) in images.length" :key="i"-->
    <v-row>
      <v-btn aligment="center" justify="start" width="200" max-heigth="200">
        <v-card aligment="center" justify="start" max-width="200" max-heigth="200">
          <v-img
            height="200"
            width="200"
            :src="require('../assets/heroes/' + images[0].image + '.jpg')"
          />
          <v-card-title aligment="center" justify="start" max-width="200" max-heigth="200">
            {{ images[0].name }}
          </v-card-title>
        </v-card>
        <!-- <v-card aligment="center" justify="space-around" max-width="700">
          <v-card-title>
            Descripcion
          </v-card-title>
          <v-card-text justify="center">
            {{ images[1].description }}
          </v-card-text>
        </v-card> -->
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        image: "CaballeroLuna",
        name: "Caballero Luna"
      },
      {
        image: "Medusa",
        name: "Medusa"
      },
      {
        image: "Magik",
        name: "Magik"
      }
    ]
  })
};
</script>
