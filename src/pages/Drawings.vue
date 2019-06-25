<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List drawings -->
    <div class="drawings">
      <ArtworkCard v-for="edge in $page.drawings.edges" :key="edge.node.id" :artwork="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
{
  drawings: allDrawing {
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
        ...on Drawing {
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
