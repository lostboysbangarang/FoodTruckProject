<template>
	<div class="form-wrap">
		<ValidationObserver v-slot="{ invalid }">
			<form :disabled="loading" @submit.prevent="submissive">
				<p class="register">
					Don't have an account? Register now:
					<nuxt-link to="/register">Register</nuxt-link>
				</p>
				<h2>Login to FoodTrucks</h2>
				<div class="inputs">
					<div class="input">
						<ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
							<input
								id="email"
								v-model="form.email"
								type="email"
								placeholder="Your Login Email"
							/>
							<span class="input-invalid-message">{{ errors[0] }}</span>
						</ValidationProvider>
					</div>
					<div class="input">
						<ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6|max:35">
							<input
								id="password"
								v-model="form.password"
								type="password"
								placeholder="Your Login Password"
							/>
							<span class="input-invalid-message">{{ errors[0] }}</span>
						</ValidationProvider>
					</div>
				</div>
				<button class="button" :disabled="invalid || loading">Login</button>
				<!-- <span class="error">Errors: {{error}}</span> -->
				<div class="angle"></div>
			</form>
		</ValidationObserver>
		<div class="background"></div>
	</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
	name: 'LoginForm',
	components: {
		ValidationObserver,
		ValidationProvider,
	},

	data() {
		return {
			error_message: null,
			form: {
				email: '',
				password: '',
				username: '',
			},
			loading: false,
			success: null,
			errored: null,
		}
	},
	computed: {
		...mapGetters(['isAuthenticated', 'loggedInUser']),
	},
	mounted() {
		document.body.className = "loginBody";
	},
	methods: {
		async submissive(event) {
			/*
			try {
				this.loading = true

				await this.$axios
					.post('api/login', this.form)
					.then((response) => {
						console.log(response.data)

						this.success = response.data.boo
						this.username =
							response.data.username
						this.errored = false

						console.log(
							`\nSUCCESS:\t`,
							this.success
						)
					})
					.catch((error) => {
						this.errored = true
						this.error_message =
							error.response.data
					})
					.finally(this.loading === false)
				console.log(
					`Authorized to be Seccsi\n`,
					this.$auth
				)
			} catch (e) {
				console.log(`\nERROR ERROR WE GON DIE\n`, e)
				this.error = e.response.data.message
			}
			*/
			// try {

			await this.$auth
				.loginWith('cookie', {
					data: {
						email: this.form.email,
						password: this.form.password,
					},
				})
				.then(() => {
					// todo: Send them to the logged in page
					this.$router.push('/')
					console.log('logged in', arguments)
				})
				.catch((error) => {
					// todo: Tell the user they did bad
					console.log('login error', error)
				})

			/*
			if (this.success && seccsi) {
				await this.$auth.setUser(this.username)
				this.$auth.$state.loggedIn = this.success
			}
*/
			/*
			} catch (e) {
				console.log(`\nERROR ERROR WE GON DIE\n`, e)
				this.error = e.response.data.message
			}
			*/
		},
		async seccsi() {
			try {
				await axios.get('api/me', this.form).then((response) => {
					this.$auth.setUser(response.data)
				})
			} catch (e) {
				console.log(`\nERROR ERROR WE GON DIE\n`, e)
				this.error = e.response.data.message
			}
		},
	},
}
</script>

<style lang="scss">
.loginBody {
	background-color: whitesmoke;
}
.form-wrap {
	overflow: hidden;
	background-color: whitesmoke;
	display: flex;
	height: calc(100vh - 60px);
	justify-content: center;
	align-self: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	a {
		text-decoration: none;
		color: #4a7c59;
	}
	.register {
		margin-bottom: 32px;
		.nuxt-link {
			color: black;
		}
	}
	form {
		padding: 0 10px;
		position: relative;
		display: flex;
		z-index: 3;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		@media (min-width: 1100px) {
			padding: 0 50px;
		}
		h2 {
			text-align: center;
			font-size: 32px;
			color: #68b0ab;
			margin-bottom: 40px;
			@media (min-width: 1100px) {
				font-size: 40px;
			}
		}
		.inputs {
			width: 100%;
			max-width: 350px;
			.input {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 8px;
				input {
					width: 100%;
					border: none;
					background-color: #faf3dd;
					padding: 4px 4px 4px 30px;
					height: 50px;
					&:focus {
						outline: none;
					}
					&:active {
						background-color: #faf3dd;
					}
					&#email {
						background-image: url(assets/svgs/email.svg);
					}
					&#password {
						background-image: url(assets/svgs/password.svg);
					}
					background-repeat: no-repeat;
					background-position: 8px center;
					background-size: 12px auto;
				}
				input:-webkit-autofill,
				input:-webkit-autofill:hover,
				input:-webkit-autofill:focus,
				input:-webkit-autofill:active {
					-webkit-box-shadow: 0 0 0 30px #faf3dd inset !important;
					box-shadow: 0 0 0 30px #faf3dd inset !important;
				}
				.icon {
					width: 12px;
					height: auto;
					position: absolute;
					left: 6px;
				}
			}
		}
	}
	.angle {
		display: none;
		position: absolute;
		background-color: whitesmoke;
		transform: rotateZ(9deg);
		z-index: -1;
		width: 360px;
		right: -30%;
		height: 110vh;
		@media (min-width: 900px) {
			display: initial;
		}
	}
	.background {
		display: none;
		flex: 2;
		background-size: cover;
		background-position: center;
		background-image: url(assets/loginRegister.jpg);
		width: 100%;
		height: 100%;
		@media (min-width: 900px) {
			display: initial;
		}
	}
}
</style>
