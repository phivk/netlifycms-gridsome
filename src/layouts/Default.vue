<template>
  <div id="app" class="pa2 pa3-ns">
    <header>
      <div>
        <Logo v-if="showLogo" />
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer db tc mb3 mt5">
      <span>Copyright © {{ new Date().getFullYear() }} Iriée Zamblé. </span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
  },
};
</script>

<style lang="scss"></style>
