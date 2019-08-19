<template>
	<div class="mt5 mb4 tc">

		<h1 v-if="showTitle" class="">
			{{ $static.metaData.siteName }}
		</h1>

		<div>
			{{ $static.metaData.siteDescription }}
		</div>

		<nav class="mv3 navbar">
			<a href="/paintings">Paintings</a>
			<a href="/drawings">Drawings</a>
			<a target="_blank" href="https://instagram.com/irieezamble/">Instagram&nbsp;➚</a>
			<a target="_blank" href="mailto:irieezamble@gmail.com">Email&nbsp;➚</a>
		</nav>

	</div>
</template>

<static-query>
query {
  metaData {
    siteName,
    siteDescription
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss">
.navbar a {
	margin: .5rem;
}
</style>
