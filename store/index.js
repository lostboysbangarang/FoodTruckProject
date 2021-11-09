// export const getters = {
// 	isAuthenticated(state) {
// 		return state.auth.loggedIn
// 	},

// 	loggedInUser(state) {
// 		return state.auth.user
// 	},
// }
export const state = () => ({
	counter: 0
})

export const mutations = {
	increment(state) {
		state.counter++
	}
}

export const strict = false;
// import axios from 'axios';

// const yelpResults = [];

// yelpResults = axios({ 	method: 'GET',
// 						// host: '0.0.0.0',
// 						url: '/api/yelpTrucks',
// 						headers: {  'Content-Type': 'application/json' },
// 						params: {   'term': 'foodtruck',
// 									'latitude': this.fetchIpInfo.lat,  
// 									'longitude': this.fetchIpInfo.lon,
// 									'radius': '40000',
// 									'limit': '36'}}).then(response => {
// 										console.log("help", response)
// 										// console.log("MountedYelpArray", this.mountedYelp)
// 										// this.mountedYelp.push(response.data)
// 									})

