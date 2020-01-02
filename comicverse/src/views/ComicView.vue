<template>
  <div class="ComicView">
    <Comic msg="pagina de comics" />
  </div>
</template>

<script>
import Comic from "@/components/Comic.vue";

export default {
  name: "ComicView",
  components: {
    Comic
  }
};
</script>
