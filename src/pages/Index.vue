<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-50-ns pa2">
          <g-link to="/paintings">
            <g-image alt="Paintings" class="" src="/images/uploads/200_x_150_cm_Hooded_and_BootedFINAL.jpg" />
          </g-link>
          <g-link to="/paintings">Paintings</g-link>
        </div>
        <div class="fl w-100 w-50-ns pa2">
          <g-link to="/drawings">
            <g-image alt="Drawings" class="" src="/images/uploads/there-ain-t-no-trouble-in-paradise.jpg" />
          </g-link>
          <g-link to="/drawings">Drawings</g-link>
        </div>
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
import Author from '~/components/Author.vue'
import ArtworkCard from '~/components/ArtworkCard.vue'

export default {
  components: {
    Author,
    ArtworkCard
  },
  metaInfo: {
    title: 'Home'
  }}
</script>