<template>
  <div class="HeroView">
    <Hero msg="Vista de los heroes" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  name: "HeroView",
  components: {
    Hero
  }
};
</script>
