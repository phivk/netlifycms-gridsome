<template>
  <div class="">
    <g-link :to="artwork.path">
      <g-image
        :alt="artwork.title"
        v-if="artwork.coverImage"
        :src="artwork.coverImage"
      />
    </g-link>
    <g-link class="db" :to="artwork.path">{{ artwork.title }}</g-link>
  </div>
</template>

<script>
import ArtworkMeta from "~/components/ArtworkMeta";
import ArtworkTags from "~/components/ArtworkTags";

export default {
  components: {
    ArtworkMeta,
    ArtworkTags,
  },
  props: ["artwork"],
};
</script>

<style scoped lang="scss">
img {
  max-height: calc(100vh - 2rem);
}
</style>
