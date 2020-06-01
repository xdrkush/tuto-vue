<template>
	<div>
    
		<!-- Title Components -->
		<titleComponent />
		<!-- / Title Components -->

		<!-- Search Bar Component -->
		<searchComponent />
		<!-- / Search Bar Components -->

		<!-- Card News Components -->
		<newsComponent />
		<!-- / Card News Components -->

		<!-- List Result Components -->
		<resultComponent />
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
	}
};
</script>