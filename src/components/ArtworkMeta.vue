<template>
   <div class="artwork-meta">
      Posted {{ artwork.date }}.
      <template v-if="artwork.timeToRead">
        <strong>{{ artwork.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['artwork']
}
</script>

<style lang="scss">
.artwork-meta {
  font-size: .8em;
  opacity: .8;
}
</style>