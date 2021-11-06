<template>
	<div>
		<!-- <button @click="successi">clickme</button> -->
		<Nav />
		<Body />
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		successi() {
			console.log(this.$auth)
		},
	},
	
}
</script>

<style lang="scss" scopped>
// body {
// 	overflow-x: hidden;
// 	margin: 0;
// 	padding: 0;
// 	width: 100%;
// 	height: 100%;
// }
</style>
