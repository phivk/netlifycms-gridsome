<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List paintings -->
    <div class="flex relative w-100 flex-wrap justify-center ph2">
      <ArtworkCard
        v-for="edge in $page.paintings.edges"
        :key="edge.node.id"
        :artwork="edge.node"
        class="w-100 w-40-m w-20-l ma2"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  paintings: allPainting(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        coverImage (width: 770, height: 380, blur: 10)
        ...on Painting {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import ArtworkCard from "~/components/ArtworkCard.vue";

export default {
  components: {
    Author,
    ArtworkCard,
  },
  metaInfo: {
    title: "Paintings",
  },
};
</script>
