<template>
  <Layout>
    <div class="tc mt5">
      <h1>
        {{ $page.painting.title }}
      </h1>

      <ArtworkMeta :artwork="$page.painting" />

      <div class="mt3 pa3">
        <g-image
          alt="Cover image"
          v-if="$page.painting.coverImage"
          :src="$page.painting.coverImage"
        />
      </div>

      <div v-html="$page.painting.content" /></div>

      <TheNavBar />
      <!-- <div class="artwork__footer">
        <ArtworkTags :artwork="$page.painting" />
      </div> -->
    </div>
  </Layout>
</template>

<script>
import ArtworkMeta from "~/components/ArtworkMeta";
import ArtworkTags from "~/components/ArtworkTags";
import Author from "~/components/Author.vue";
import TheNavBar from "~/components/TheNavBar";

export default {
  components: {
    Author,
    ArtworkMeta,
    ArtworkTags,
    TheNavBar,
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
