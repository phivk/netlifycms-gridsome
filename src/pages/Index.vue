<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" :show-description="true" />

    <div class="flex justify-center">
      <div class="mh3">
        <g-link to="/paintings" class="db">
          <h2>Paintings</h2>
        </g-link>
        <g-link to="/paintings">
          <g-image
            alt="Paintings"
            src="/images/uploads/hooded-and-booted.jpg"
          />
        </g-link>
      </div>
      <div class="mh3">
        <g-link to="/drawings" class="db">
          <h2>Drawings</h2>
        </g-link>
        <g-link to="/drawings">
          <g-image
            alt="Drawings"
            src="/images/uploads/there-ain-t-no-trouble-in-paradise.jpg"
          />
        </g-link>
      </div>
    </div>
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
</style>
