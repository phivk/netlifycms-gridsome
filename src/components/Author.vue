<template>
	<div class="mt5 mb4 tc">
		<h1 v-if="showTitle">
			{{ $static.metaData.siteName }}
		</h1>

		<div v-if="showDescription">
			{{ $static.metaData.siteDescription }}
		</div>

		<TheNavBar />
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
import TheNavBar from "~/components/TheNavBar";
export default {
	components: {
		TheNavBar,
	},
	props: ["showTitle", "showDescription"],
};
</script>

<style lang="scss">
.navbar a {
	margin: 0.5rem;
}
</style>
