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
      
			<!-- Title Components -->
			<titleComponent/>
			<!-- / Title Components -->

			<!-- Search Bar Component -->
			<searchComponent/>
			<!-- / Search Bar Components -->

			<!-- Card News Components -->
			<newsComponent/>
			<!-- / Card News Components -->

			<!-- List Result Components -->
			<resultComponent/>
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
import titleComponent from './components/titleComponent'
import newsComponent from './components/newsComponent'
import resultComponent from './components/resultComponent'
import searchComponent from './components/searchComponent'

export default {
	components: {
		titleComponent, searchComponent, newsComponent, resultComponent
	},
	data: () => ({
		drawer: null
	})
};
</script>