<template>
  <Layout>
    <div class="tc mt5">
      <h1>
        {{ $page.drawing.title }}
      </h1>

      <ArtworkMeta :artwork="$page.drawing" />

      <div class="mt3 pa3">
        <g-image
          alt="Cover image"
          v-if="$page.drawing.coverImage"
          :src="$page.drawing.coverImage"
        />
      </div>
    </div>

    <!-- <div class="artwork__footer">
        <ArtworkTags :artwork="$page.drawing" />
      </div> -->
  </Layout>
</template>

<script>
import ArtworkMeta from "~/components/ArtworkMeta";
import ArtworkTags from "~/components/ArtworkTags";
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
    ArtworkMeta,
    ArtworkTags,
  },
  metaInfo() {
    return {
      title: this.$page.drawing.title,
      meta: [
        {
          name: "description",
          content:
            this.$page.drawing.material + " (" + this.$page.drawing.year + ")",
        },
      ],
    };
  },
};
</script>

<page-query>
query Drawing ($path: String!) {
  drawing: drawing (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    year
    material
    dimensions
    timeToRead
    tags {
      id
      title
      path
    }
    content
    coverImage (width: 860, blur: 10)
  }
}
</page-query>

<style scoped lang="scss">
img {
  max-height: calc(100vh - 2rem);
}
</style>
