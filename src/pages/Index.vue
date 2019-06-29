<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    <ArtworkCard :artwork="$page.drawing"/>

  </Layout>
</template>

<page-query>
query {
  drawing (path:"/drawings/there-ain-t-no-trouble-in-paradise") {
    id
    title
    path
    coverImage
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