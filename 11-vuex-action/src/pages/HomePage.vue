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
import { mapState } from 'vuex';
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
		newsData: this.newsData
	}),
	methods: {
		getChildSearch: (value) => {
			alert(value)
    }
	},
	computed: {
		...mapState('home', ['newsData'])
	},
};
</script>