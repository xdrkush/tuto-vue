<template>
	<div>
    
		<!-- Title Components -->
		<titleComponent titre='Welcome To VueJS !' />
		<!-- / Title Components -->

		<!-- Search Bar Component -->
		<searchComponent v-on:searchToParent='getChildSearch' />
		<!-- / Search Bar Components -->

		<!-- Card News Components -->
		<newsComponent titre='News :' :dataNews='newsData' />
		<!-- / Card News Components -->

		<!-- List Result Components -->
		<resultComponent titre='Liste Result :' />
		<!-- / List Result Components -->

	</div>
</template>

<script>
import titleComponent from "../components/titleComponent";
import newsComponent from "../components/newsComponent";
import resultComponent from "../components/resultComponent";
import searchComponent from "../components/searchComponent";

export default {
	components: {
		titleComponent,
		searchComponent,
		newsComponent,
		resultComponent
	},
	data: () => ({
		search: '',
		newsData: [
				{
					title: 'Our Changing Planet',
					author: 'Kurt Wagner',
					image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
					message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
				},
				{
					title: 'Our Changing Planet',
					author: 'Kurt Wagner',
					image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
					message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
				},
				{
					title: 'Our Changing Planet',
					author: 'Kurt Wagner',
					image: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
					message: 'Visit ten places on our planet that are undergoing the biggest changes today.'
				}
		]
	}),
	methods: {
		getChildSearch: (value) => {
			alert(value)
    }
	}
};
</script>