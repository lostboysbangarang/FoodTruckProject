<template>
	<ClientOnly>
		<div class="main">
			<div class="container"></div>
			<div v-if="!mobile" class="welcome">
				<div class="wrapper">
					<div class="logo">
						<img src="~/assets/food-truck.svg" alt="" />
					</div>
					<div v-if="isAuthenticated" class="userIntro">
						<h1>Welcome {{ loggedInUser.username }}! So glad you're hungry!</h1>
					</div>
					<div v-else id="after" class="userIntro">
						<h1>
							Please <nuxt-link class="links" to="/login">Login</nuxt-link> or
							<nuxt-link class="links" to="/register">Register</nuxt-link> to use this site!
						</h1>
						<h3 class="animate__animated animate__flash">Don't forget to turn off AdBlock!</h3>
					</div>
					<ul v-if="isAuthenticated" class="buttons">
						<li><nuxt-link class="button" to="/trucks">Trucks Near Me</nuxt-link></li>
						<li><nuxt-link class="button" to="/saved">Saved Trucks</nuxt-link></li>
						<li><nuxt-link class="button" to="/explore">Traveling?</nuxt-link></li>
					</ul>
				</div>
			</div>
			<div v-else id="mobile" class="welcome">
				<div class="wrapper">
					<div class="logo">
						<img src="~/assets/food-truck.svg" alt="" />
					</div>
					<div v-if="isAuthenticated" class="userIntro">
						<h1>Welcome {{ loggedInUser.username }}! So glad you're hungry!</h1>
					</div>
					<div v-else id="after" class="userIntro">
						<h1>
							Please <nuxt-link class="links" to="/login">Login</nuxt-link> or
							<nuxt-link class="links" to="/register">Register</nuxt-link> to use this site!
						</h1>
						<h3>Don't forget to turn off AdBlock!</h3>
					</div>
					<ul v-if="isAuthenticated" class="buttons">
						<li><nuxt-link class="button" to="/trucks">Trucks Near Me</nuxt-link></li>
						<li><nuxt-link class="button" to="/saved">Saved Trucks</nuxt-link></li>
						<li><nuxt-link class="button" to="/explore">Traveling?</nuxt-link></li>
					</ul>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'MainBody',
	data() {
		return {
			mobile: false,
		}
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser']),
	},

	mounted() {
		this.screenSize()
	},
	methods: {
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
.main {
	& a {
		text-decoration: none;
		&:link,
		&:visited {
			color: inherit;
		}
	}
	position: absolute;
	& .container {
		height: calc(100vh - 60px);
		width: 100vw;
		background-image: url('~/assets/background.jpg');
		background-size: cover;
		background-position: center;
		position: absolute;
		z-index: 1;
	}
	& .welcome {
		@media screen and (max-width: 1100px) {
			width: 80vw;
			margin-left: 10vw;
			margin-top: calc(20vh - 60px);
			height: 60vh;
		}
		position: absolute;
		margin-left: 20vw;
		border-radius: 32px;
		z-index: 2;
		background-color: rgba(104, 176, 171, 0.7);
		width: 60vw;
		height: 60vh;
		margin-top: calc(20vh - 60px);
		display: flex;
		flex-direction: column;
		align-self: center;
		align-items: center;
		justify-content: center;
		& .wrapper {
			width: 80%;
			height: 80%;
			align-self: center;
			align-items: center;
			justify-content: center;
			// background-color: black;
			& .logo {
				// background-color: white;
				width: 100%;
				height: 80%;
				display: flex;
				justify-content: center;
				border: 5px solid black;
				border-style: none none solid none;
				margin: 0;
				& img {
					width: auto;
					height: 100%;
				}
			}
			& .userIntro {
				text-align: center;
				&#after {
					margin-top: 8%;
					& .links {
						color: #c8d5b9;
					}
				}
			}
			& .buttons {
				width: 90%;
				display: flex;
				justify-content: space-between;
				list-style: none;
				@media (max-width: 1200px) {
					margin-top: 8%;
				}
				& li {
					padding: 12px 20px 12px;
					outline: 2px solid #4a7c59;
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
					& .button {
						font-size: 20px;
					}
				}
			}
		}
		&#mobile {
			margin-top: calc(20vh - 60px);
			width: 90vw;
			height: 60vh;
			margin-left: 5vw;
			& .wrapper {
				position: relative;
				& .logo {
					position: relative;
					top: -10%;
				}
				& h1 {
					font-size: 24px;
				}
				& .userIntro {
					margin-top: -16%;
					&#after {
						margin-top: -8%;
					}
				}
				& .buttons {
					// justify-content: flex-start;
					& li {
						padding: 4px 12px 4px;
					}
				}
			}
		}
	}
}
</style>
