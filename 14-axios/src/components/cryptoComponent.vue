<template>
	<div>
		<!-- Card Bitcoin Price Components -->
		<v-container class="full-width" fluid>
			<v-row align="center" justify="center">
				<v-card-text>
					<p class="display-1 text--primary font-italic">{{ title }}</p>
				</v-card-text>
				<v-card max-width="500" class="mx-auto">
					<v-img
						src="https://logos-download.com/wp-content/uploads/2016/06/Bitcoin_logo_yellow-700x438.png"
						height="194"
					></v-img>

					<v-card-actions class="">
						<v-btn text color="deep-purple accent-4">
							1 <v-icon>mdi-bitcoin</v-icon> =
						</v-btn>
						<v-btn text color="deep-purple accent-4">
							{{price.EUR.rate_float}} € //
						</v-btn>
						<v-btn text color="deep-purple accent-4">
							{{price.USD.rate_float}} $ //
						</v-btn>
						<v-btn text color="deep-purple accent-4">
							{{price.GBP.rate_float}} £
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-row>
		</v-container>
		<!-- / Card Bitcoin Price Components -->
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	data() {
		return {
			title: "Crypto API"
		};
	},
	computed: {
		...mapState("crypto", ["price"])
	}
};
</script>