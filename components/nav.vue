<template>
	<div class="container">
		<header>
			<nuxt-link id="logo" to="/">FoodTrucks</nuxt-link>
			<!--
For some reason the li elements here are cuasing a weird error with vue

vue.runtime.esm.js?2b0e:619 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. 
This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. 
Bailing hydration and performing full client-side render.
-->

			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<ClientOnly>
					<li v-if="!$auth.$state.loggedIn"><nuxt-link to="/login">Login</nuxt-link></li>
					<li v-if="$auth.$state.loggedIn" @click="logout">Logout</li>
					<li v-if="$auth.$state.loggedIn">
						<div>{{ $auth.user.username }}</div>
					</li>
				</ClientOnly>
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
			mobile: false,

			// subject: this.$auth.$state.user.
		}
	},
	computed: {
		...mapState('auth', ['loggedIn', 'user']),
	},
	mounted() {
		this.screenSize()
	},
	methods: {
		async logout() {
			await this.$auth.logout()
			this.$router.push('/login')
		},
		screenSize() {
			if (process.browser) {
				// console.log(window)
				if (window.innerWidth < 1200) {
					this.mobile = true
					// console.log(this.mobile);
				}
			}
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
		&:link,
		&:visited {
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
				color: #68b0ab;
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
			&.mobile {
				flex-direction: column;
				min-width: 60px;
			}
		}
	}
}
</style>
