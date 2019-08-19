<template>
  <div class="artwork-card content-box" :class="{'artwork-card--has-poster' : artwork.poster}">
    <div class="artwork-card__header">
      <g-image :alt="artwork.title" v-if="artwork.coverImage" class="artwork-card__image" :src="artwork.coverImage" />
      <g-link class="artwork-card__link" :to="artwork.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import ArtworkMeta from '~/components/ArtworkMeta'
import ArtworkTags from '~/components/ArtworkTags'

export default {
  components: {
    ArtworkMeta,
    ArtworkTags
  },
  props: ['artwork'],
}
</script>

<style lang="scss">
  
</style>