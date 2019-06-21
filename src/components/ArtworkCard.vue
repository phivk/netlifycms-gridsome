<template>
  <div class="artwork-card content-box" :class="{'artwork-card--has-poster' : artwork.poster}">
    <div class="artwork-card__header">
      <g-image alt="Cover image" v-if="artwork.coverImage" class="artwork-card__image" :src="artwork.coverImage" />
    </div>
    <div class="artwork-card__content">
      <h2 class="artwork-card__title" v-html="artwork.title" />
      <p class="artwork-card__description" v-html="artwork.description" />
      
      <ArtworkMeta class="artwork-card__meta" :artwork="artwork" />
      <ArtworkTags class="artwork-card__tags" :artwork="artwork" />

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
.artwork-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>