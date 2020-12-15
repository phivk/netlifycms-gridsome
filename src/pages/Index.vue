<template>
  <Layout :show-logo="false">
    <Author :show-title="true" />
    <main>
      <h2 class="tc">Exhibitions</h2>
      <ul class="list pa0 ma0 flex flex-wrap flex-nowrap-ns items-start justify-center">
        <li
          v-if="!edge.node.hidden"
          class="pa2 pa3-l mw6 w-100 w-third-ns"
          :class="{
            'w-50-ns-i': edge.node.featured,
            'mt5-l mt4-m': !edge.node.featured,
          }"
          v-for="edge in $page.expos.edges"
          :key="edge.node.id"
        >
          <article>
            <a :href="edge.node.link" target="_blank">
              <g-image :alt="edge.node.title" :src="edge.node.coverImage" />
            </a>
            <h3 class="ma0 f5 f4-l">{{ edge.node.title }}</h3>
            <div class="f6 f5-l">{{ edge.node.dates }}</div>
            <a class="f6 f5-l" :href="edge.node.link" target="_blank">
              {{ edge.node.location }}
            </a>
          </article>
        </li>
      </ul>
    </main>
  </Layout>
</template>

<page-query>
query {
  expos: allExhibition(sortBy: "sortOrder", order: ASC) {
    edges {
      node {
        id
        title
        dates
        location
        link
        coverImage
        featured
        hidden
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
    title: "Home",
  },
};
</script>

<style scoped>
img {
  max-height: 100vh;
}
@media (min-width: 30em) {
  .w-50-ns-i {
    width: 50% !important;
  }
}
</style>
