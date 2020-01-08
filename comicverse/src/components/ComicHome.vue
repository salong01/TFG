<template>
  <v-container>
    <!--v-for="(hero, i) in images.length" :key="i"-->
    <v-row>
      <v-btn>
        <v-card aligment="center" justify="start" max-width="260">
          <v-img
            height="400"
            width="260"
            :src="require('../assets/heroes/' + images[1].image + '.jpg')"
          />
          <v-card-title>
            {{ images[1].name }}
          </v-card-title>
        </v-card>
        <v-card aligment="center" justify="space-around" max-width="700">
          <v-card-title>
            Descripcion
          </v-card-title>
          <v-card-text justify="center">
            {{ images[1].description }}
          </v-card-text>
        </v-card>
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
        name: "CaballeroLuna",
        description: "El batman de Marvel"
      },
      {
        image: "Medusa",
        name: "Medusa",
        description:
          "La esposa de Rayo Negro que juntos gobiernan Attilan, el reino de los inhumanos"
      },
      {
        image: "Magik",
        name: "Magik",
        description:
          "La hermana pequeña de Colosso, a parte de ser mutante es reina del reino del Limbo"
      }
    ]
  })
};
</script>
