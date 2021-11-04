<template>
	<div class="container">
		<header>
			<nuxt-link id="logo" to="/">FoodTrucks</nuxt-link>
			<ul v-if="$auth.$state.loggedIn">
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
	@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
	#logo {
		font-family: 'Shrikhand', cursive;
		font-size: 32px;
		color: whitesmoke;
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
			&:link, &:visited {
				color: inherit;
			}
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
					color: #68B0AB;
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
