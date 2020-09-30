<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />
    <div class="measure-wide center pa2">
      <h1>About</h1>

      <h2>Iriée Zamblé (1995, Amsterdam)</h2>
      <p>
        Expressively painted figures of self-assured black people are playing the lead in Iriée Zamblé’s work. Zamblé puts a magnifying glass upon some of the passengers that pass us daily, but are nonetheless underrepresented in art today . Acquaintances, passengers and friends lay at the base of the paintings. By appropriating details of their appearance, Zamblé shapes a new, bold and vivid figure. The portrayed are depicted to present themselves as a norm in it’s variety.  With the title being "The default (series)" Iriée positions people of color as a standard rather than an exception.
      </p>
      <p class="i">
        "In Western society we look at humanness and humanity through the lens of whiteness. By using my own lens and frame of references, I want to paint a more realistic picture of who and what I see when I walk to the supermarket, for example. I think it is necessary to offer an alternative perspective within the visual arts so that humanity is not viewed through one general lens."
      </p>

      <figure class="mw5">
        <img src="/images/uploads/iriee_zamble_-_museum_het_rembrandthuis_fotografie_mark_bolk.jpg" alt="Iriée Zamblé at Museum Het Rembrandthuis">
        <figcaption class="f7">Photo: Mark Bolk</figcaption>
      </figure>

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
    title: "About",
  },
};
</script>

<style scoped>
img {
  max-height: 100vh;
}
</style>
