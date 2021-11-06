<template>
	<div class="container">
		<header>
			<h1 class="title">
      <span class="text-wrapper">
        <span class="letters">Food Truck</span>
      </span>
    </h1>
			<ul v-if="$auth.$state.loggedIn && !mobile">
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><div @click="logout">Logout</div></li>
				<!-- <li><div>{{loggedInUser.username}}</div></li> -->
			</ul>
			<ul v-else-if="$auth.$state.loggedIn && mobile" class='mobile'>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li><div @click="logout">Logout</div></li>
				<!-- <li><div>{{loggedInUser.username}}</div></li> -->
			</ul>
			<ul v-else-if="!mobile">
				<!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
				<li><nuxt-link to="/login">Login</nuxt-link></li>
				<li><nuxt-link to="/register">Register</nuxt-link></li>
			</ul>
			<ul v-else-if="mobile" class="mobile">
				<!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
				<li><nuxt-link to="/login">Login</nuxt-link></li>
				<li><nuxt-link to="/register">Register</nuxt-link></li>
			</ul>
		</header>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'NavCard',
	mounted() {
		this.screenSize(); 
    },
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
	methods: {
		async logout() {
			await this.$auth.logout()
			this.$router.push('/login')
		},
		screenSize() {
			if(process.browser) {
				// console.log(window)
				if(window.innerWidth < 1200) {
					this.mobile = true;
					// console.log(this.mobile);
				}
			}

		},
	}
}
</script>
<script>
export default {
  mounted() {
    const textWrapper = document.querySelector('.title .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
	this.$anime
      .timeline({ loop: true })
  	
	.add({
    targets: '.title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: 'title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  }
}
</script>
<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Oswald:wght@300&display=swap');
	.title {
		font-family: Josefin;
  		font-size: 3.5em;
		color:#d6d99e;
		position: relative;
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
				&.mobile {
					flex-direction: column;
					min-width: 60px;
				}
			}
		}
	}
</style>
