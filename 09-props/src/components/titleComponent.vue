<template>
	<div>
		<!-- Title Components -->
		<v-container class="fill-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<div class="display-4 font-weight-bold text-center">{{ titre }}</div>
					<p class="display-1 text-center text--primary font-italic">{{ stitle }}</p>
				</v-card-text>
			</v-row>
		</v-container>
		<!-- / Title Components -->
	</div>
</template>

<script>
export default {
	data: () => ({
		subTitle: 'This Tuto is realize with',
		framework: 'Vuetify'
	}),
	computed: {
		stitle: function () {
			return this.subTitle + ' ' + this.framework
		}
	},
	props: {
		titre: String
	}
};
</script>