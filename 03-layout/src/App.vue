<template>
	<v-app id="inspire">
		<!-- Sidebar Components -->
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-email</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<!-- / Sidebar Components -->

		<!-- Navbar Components -->
		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Tuto Vuetify</v-toolbar-title>
		</v-app-bar>
		<!-- / Navbar Components -->

		<!-- Content Router -->
		<v-content>
      
			<!-- Title -->
			<v-container class="fill-width" fluid>
				<v-row align="center" justify="center">
					<v-card-text>
						<div class="display-4 font-weight-bold text-center">Welcome To Vuejs</div>
						<p class="display-1 text-center text--primary font-italic">This Tuto is realize with Vuetify</p>
					</v-card-text>
				</v-row>
			</v-container>
			<!-- / Title -->

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

			<!-- Card News Components -->
			<v-container class="full-width" fluid>
				<v-row align="center" justify="center">
					<v-card-text>
						<p class="display-1 text--primary font-italic">News:</p>
					</v-card-text>
					<v-card max-width="344" class="mx-auto" v-for="news in 3" :key="news">
						<v-list-item>
							<v-list-item-avatar color="grey"></v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
								<v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>

						<v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

						<v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>
					</v-card>
				</v-row>
			</v-container>
			<!-- / Card News Components -->

			<!-- List Result Components -->
			<v-container class="full-width" fluid>
				<v-row align="center" justify="center">
					<v-card-text>
						<p class="display-1 text--primary font-italic">List Result:</p>
					</v-card-text>
					<v-list three-line>
						<template v-for="(item, index) in items">
							<v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

							<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

							<v-list-item v-else :key="item.title">
								<v-list-item-avatar>
									<v-img :src="item.avatar"></v-img>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title v-html="item.title"></v-list-item-title>
									<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</template>
					</v-list>
				</v-row>
			</v-container>
			<!-- / List Result Components -->

		</v-content>
		<!-- / Content Router -->

		<!-- Footer Components -->
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019 By Drk</span>
		</v-footer>
		<!-- Footer Components -->
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
		items: [
			{ header: "Today" },
			{
				avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
				title: "Brunch this weekend?",
				subtitle:
					"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
			},
			{ divider: true, inset: true },
			{
				avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
				title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
				subtitle:
					"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
			},
			{ divider: true, inset: true },
			{
				avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
				title: "Oui oui",
				subtitle:
					"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
			},
			{ divider: true, inset: true },
			{
				avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
				title: "Birthday gift",
				subtitle:
					"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
			},
			{ divider: true, inset: true },
			{
				avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
				title: "Recipe to try",
				subtitle:
					"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
			}
		]
	})
};
</script>