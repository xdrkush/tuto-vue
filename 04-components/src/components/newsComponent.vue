<template>
	<div>
		<!-- Search Bar Component -->
		<v-container class="fill-width" fluid>
			<v-row align="center" justify="center">
				<v-toolbar class="mx-auto" max-width="700" dark color="indigo">
					<v-autocomplete
						v-model="select"
						:loading="loading"
						:items="items"
						:search-input.sync="search"
						cache-items
						class="mx-4"
						flat
						hide-no-data
						hide-details
						label="Rechercher"
						solo-inverted
					></v-autocomplete>
					<v-btn icon>
						<v-icon>mdi-magnify</v-icon>
					</v-btn>
				</v-toolbar>
			</v-row>
		</v-container>
		<!-- / Search Bar Components -->
	</div>
</template>

<script>
export default {
	data: () => ({})
};
</script>