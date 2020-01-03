<template>
  <v-container>
    <v-row>
      <v-card
        :loading="loading"
        aligment="center"
        justify="start"
        max-width="260"
      >
        <v-img
          height="400"
          width="260"
          :src="require('../assets/comics/' + image + '.jpg')"
        ></v-img>

        <v-card-title>
          {{ name }}
        </v-card-title>
        <v-card-text>
          <v-row align="justify-left" class="mx-0">
            <v-rating
              :value="valoration"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            >
            </v-rating>
            <div class="grey--text ml-4">{{ valoration }} ({{ votes }})</div>
          </v-row>
        </v-card-text>
        <!--v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn
          color="deep-purple accent-4"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions-->
      </v-card>
      <v-card aligment="center" justify="space-around" max-width="700">
        <v-card-title align>
          Descripcion
        </v-card-title>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valoration: 2.8,
    votes: 124,
    name: "Infinity War",
    description:
      "En esta trepidante aventura nuestro heroes se enfrentan un peligro con el que sera complicado lidiar.",
    image: "InfinityWar"
  })
};
</script>
