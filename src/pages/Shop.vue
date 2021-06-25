<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />
    <div class="measure-wide center pa2 tc">
      <h1>Shop</h1>
      
      <div class="flex justify-between tl">
        <div>
          <h2 class="mt0 f4">Team Zambleezy T-shirt</h2>
          <p>
            Available in sizes 
            <span class="bg-light-green br2 ph2 pv1 dark-green">S</span>/
            <span class="bg-light-green br2 ph2 pv1 dark-green">M</span>/
            <span class="bg-light-green br2 ph2 pv1 dark-green">L</span>/
            <span class="bg-light-green br2 ph2 pv1 dark-green">XL</span>
          </p>
          <p>Free shipping in NL</p>
        </div>
        <div>
          <span class="br-pill ph3 pv2 white bg-green">€28</span>
        </div>
      </div>
      <div class="tl">
        <a class="dib bg-orange no-underline white pv2 ph3 f4 fw6 br3" href=" mailto:irieezamble+order@gmail.com?subject=irieezamble.net%20T-shirt%20Order%20&body=Hi%20Iri%C3%A9e!%0D%0A%0D%0AI'd%20like%20to%20order%20a%20T-shirt%20in%20size%3A%0D%0AS%20%2F%20M%20%2F%20L%20%2F%20XL%20(pick%20one)%0D%0A%0D%0AThanks%20in%20advance%20for%20sharing%20payment%20details.%0D%0AI%20understand%20that%20shipping%20can%20take%20a%20while.%0D%0A%0D%0AMany%20thanks%2C%0D%0A%0D%0A">Order here</a>
      </div>
      <div class="full-width flex flex-nowrap flex-wrap-ns items-start justify-center pa3">
        <img class="pa2 pa3-l w-100 w-50-ns" src="/images/uploads/webshop-1.jpg" alt="web shop 1">
        <img class="pa2 pa3-l w-100 w-50-ns" src="/images/uploads/webshop-2.jpg" alt="web shop 2">
      </div>
    </div>
  </Layout>
</template>
<script>
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  metaInfo: {
    title: "Shop",
  },
};
</script>

<style scoped>
img {
  max-height: 100vh;
}
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
