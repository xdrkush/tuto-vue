<template>
	<div>
		<!-- Title Components -->
		<v-container class="fill-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<div class="display-4 font-weight-bold text-center">{{ title }}</div>
					<p class="display-1 text-center text--primary font-italic">{{ subtitle }}</p>
					<p class="display-1 text-center text--primary font-italic">{{ time }}</p>
				</v-card-text>
			</v-row>
		</v-container>
		<!-- / Title Components -->
	</div>
</template>

<script>
export default {
	data: () => ({
		welcome: 'Welcome To',
		techno: 'Vuejs !',
		subtitle: 'This Tuto is realize with Vuetify'
	}),
	computed: {
		title: function () {
			return this.welcome + ' ' + this.techno
		}
	}
};
</script>