<template>
  <Layout>
    <div class="tc">
      <h1>
        {{ $page.painting.title }}
      </h1>

      <ArtworkMeta :artwork="$page.painting" />

      <g-image
        alt="Cover image"
        v-if="$page.painting.coverImage"
        :src="$page.painting.coverImage"
        class="mt3"
      />
    </div>

    <!-- <div class="artwork__footer">
        <ArtworkTags :artwork="$page.painting" />
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
      title: this.$page.painting.title,
      meta: [
        {
          name: "description",
          content:
            this.$page.painting.material +
            " (" +
            this.$page.painting.year +
            ")",
        },
      ],
    };
  },
};
</script>

<page-query>
query Painting ($path: String!) {
  painting: painting (path: $path) {
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
