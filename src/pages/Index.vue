<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List artworks -->
    <div class="artworks">
      <ArtworkCard v-for="edge in $page.artworks.edges" :key="edge.node.id" :artwork="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
{
  artworks: allArtwork {
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
        description
        coverImage (width: 770, height: 380, blur: 10)
        ...on Artwork {
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
import Author from '~/components/Author.vue'
import ArtworkCard from '~/components/ArtworkCard.vue'

export default {
  components: {
    Author,
    ArtworkCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
