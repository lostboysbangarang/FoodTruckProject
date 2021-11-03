<template>
	<div class="container">
		<header>
			<nuxt-link to="/">FoodTrucks Help</nuxt-link>
			<ul v-if="this.$auth.$state.loggedIn">
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><div @click="logout">Logout</div></li>
				<!-- <li><div>{{loggedInUser.username}}</div></li> -->
			</ul>
			<ul v-else>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li>
					<nuxt-link to="/login">Login</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/register"
						>Register</nuxt-link
					>
				</li>
			</ul>
		</header>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'NavCard',
	data() {
		return { 
			successi: this.$auth.$state.loggedIn,
			// subject: this.$auth.$state.user.
		}
	},
	computed: {
		...mapState('auth', ['loggedIn', 'user']),
	},
	methods: {
		async logout() {
			await this.$auth.logout()
			this.$router.push('/login')
		},
	},
}
</script>

<style lang="scss" scoped>
body {
	margin: 0;
	padding: 0;
	width: 100%;
	overflow-x: hidden;
}
.container {
	display: flex;
	justify-content: space-around;
	width: 100vw;
	background-color: #8fc0a9;
	// z-index: -1;
	// position: relative;
	& a {
		text-decoration: none;
	}
	& header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// background-color: red;
		max-width: 1600px;
		width: 80%;
		height: 60px;
		display: flex;
		& ul {
			width: 15%;
			min-width: 220px;
			display: flex;
			// background-color: red;
			justify-content: space-between;
			list-style: none;
			& li {
				padding: 4px 10px 4px;
				outline: 2px solid #4a7c59;
				// border: 1px solid black;
				cursor: pointer;
				position: relative;
				background-color: rgba(0, 0, 0, 0);
				z-index: 1;
				&:after {
					content: '';
					background-color: #faf3dd;
					width: 100%;
					z-index: -1;
					position: absolute;
					height: 100%;
					top: 4px;
					left: 4px;
					transition: 0.2s;
				}
				&:hover:after {
					top: 0px;
					left: 0px;
				}
			}
		}
	}
}
</style>
