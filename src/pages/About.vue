<template>
  <Layout :show-logo="true">
    <!-- Author intro -->
    <Author :show-title="true" />
    <div class="measure-wide center pa2">
      <h1>About</h1>
      <h2>ENG</h2>
      <p>
        Iriée Zamblé (1995) takes notice of the lack of dignified images of Afro-Dutch within a Dutch context, Zamblé’s paintings are informed by the people she knows and passes by everyday, and the lack of interest that seems to surround them. By appropriating details of their appearance, Zamblé forms new and powerful figures. She praises control and ownership through her paintings and influences the collective way black consciousness is shaped. 
      </p>
      <h2>NL</h2>
      <p> 
        Iriée Zamblé (1995) signaleert het gebrek aan waardige beelden van Afro-Nederlanders binnen een Nederlandse context. Haar schilderijen en tekeningen zijn geïnspireerd door de mensen die zij dagelijks passeert, en het gebrek aan interesse dat hen lijkt te omringen. Door details van hun uiterlijk toe te eigenen, vormt Zamblé nieuwe en krachtige figuren. Ze staat voor zelfbeschikking en controle door middel van haar schilderijen en beïnvloedt de collectieve manier waarop het zwarte bewustzijn wordt gevormd. 
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
