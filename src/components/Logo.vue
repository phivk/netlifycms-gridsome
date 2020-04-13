<template>
	<g-link class="home" to="/">
	  <span class="fixed top-0 ma3">
	    &larr; Home
	  </span>
	</g-link>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
.home {
    color: var(--body-color)!important;
    font-size: .9em;
}
</style>