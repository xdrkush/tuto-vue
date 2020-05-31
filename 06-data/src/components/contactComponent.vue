<template>
	<v-container class="full-width" fluid>
		<v-row align="center" justify="center">
			<v-card color="indigo" dark :loading="isUpdating">
				<template v-slot:progress>
					<v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
				</template>
				<v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg">
					<v-row>
						<v-col class="text-right" cols="12">
							<v-menu bottom left transition="slide-y-transition">
								<template v-slot:activator="{ on }">
									<v-btn icon v-on="on">
										<v-icon>mdi-dots-vertical</v-icon>
									</v-btn>
								</template>
								<v-list>
									<v-list-item @click="isUpdating = true">
										<v-list-item-action>
											<v-icon>mdi-settings</v-icon>
										</v-list-item-action>
										<v-list-item-content>
											<v-list-item-title>Update</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-menu>
						</v-col>
						<v-row class="pa-4" align="center" justify="center">
							<v-col class="text-center">
								<h3 class="headline">{{ name }}</h3>
								<span class="grey--text text--lighten-1">{{ title }}</span>
							</v-col>
						</v-row>
					</v-row>
				</v-img>
				<v-form>
					<v-container>
						<v-row>
							<v-col cols="12" md="6">
								<v-text-field
									v-model="name"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Name"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6">
								<v-text-field
									v-model="email"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Email"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12">
                <v-text-field
									v-model="subject"
                  dark
									filled
									color="blue-grey lighten-2"
									label="Sujet"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12">
                <v-textarea
                  autocomplete="message"
                  label="Message"
                  filled
                  dark
                ></v-textarea>
							</v-col>
							<v-col cols="12" md="12" align='center'>
                <v-btn class="ma-2" tile outlined color="white">
                  <v-icon left>mdi-message</v-icon> Envoyer un message
                </v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-form>
				<v-divider></v-divider>
			</v-card>
		</v-row>
	</v-container>
</template>
<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	}
};
</script>