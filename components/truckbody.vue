<template>
	<div>
		<div class="locationbar">
			<div class="locationbar_wrapper">
				<div class="locationbar_wrapper_icon">
					<Location />
				</div>
				<div class="locationbar_wrapper_location">
					{{ info.city }}
				</div>
			</div>
		</div>
		<div class="truck">
			<div v-for="(trucks, index) in yelpResults" :ref="index" :key="trucks.alias" :id="index" class="trucks">
				<div :ref="index + ' name'" class="name">{{ trucks.name }}</div>
				<div :ref="index + ' image'" class="image">
					<img :src="trucks.image_url" :alt="trucks.alias" />
				</div>
				<div :ref="index + ' open'" class="open">
					<div v-if="!trucks.is_closed">Open Now!</div>
					<div v-else>Closed Unfortunately!</div>
				</div>
				<div :ref="index + ' contact'" class="contact">
					<div>{{ trucks.display_phone }}</div>
					<div>
						{{ trucks.location.address1 }}<br />{{ trucks.location.city }} {{ trucks.location.state
						}}<br /><a :href="trucks.url">Check out their site!</a>
					</div>
				</div>
				<label class="like">
					<input
						:id="index + 'like'"
						:ref="index + 'like'"
						@change="saved($event, trucks)"
						type="checkbox"
						:checked="favs.includes(trucks.id)"
					/>
					<div class="hearth" />
				</label>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Location from '~/assets/svgs/locationIII.svg?inline'

export default {
	name: 'TruckCard',

	components: {
		Location,
	},
	data() {
		return {
			info: {
				city: null,
				ip: null,
				lat: null,
				lon: null,
				state: null,
				zip: null,
			},
			search: {
				term: 'foodtruck',
				latitude: '',
				longitude: '',
				limit: '36',
				radius: '40000',
			},
			yelpResults: [],
			favs: [],
		}
	},

	async mounted() {
		// get users location using their ip
		try {
			let location = false
			if (process.env.NODE_ENV === 'development') {
				location = await axios.get('http://ip-api.com/json/')
			} else {
				location = await axios.get('/api/ip')
				console.log('proxied ip', location)
			}

			this.info.city = location.data.city
			this.info.ip = location.data.query
			this.info.lat = location.data.lat
			this.info.lon = location.data.lon
			this.info.state = location.data.regionName
			this.info.zip = location.data.zip
		} catch (e) {
			console.log(e)
		}

		// search yelp for food trucks
		try {
			axios({
				method: 'get',
				url: '/api/yelpTrucks',
				headers: {
					'Content-Type': 'application/json',
				},
				params: {
					term: this.search.term,
					latitude: this.info.lat,
					longitude: this.info.lon,
					radius: this.search.radius,
					limit: this.search.limit,
				},
			}).then((response) => {
				this.favs = response.data.favs

				response.data.trucks.forEach((element) => {
					element.alias = element.alias.split('-').join(' ')
					element.image_url = element.image_url.split(`"`).join('')
					element.url = element.url.split(`"`).join('')

					this.yelpResults.push(element)
				})
			})
		} catch (e) {
			console.log(e)
		}
	},

	methods: {
		yelp() {
			console.log(this.yelpSave)
		},

		saved(event, truck) {
			axios({
				method: 'post',
				url: event.target.checked ? '/api/favoriteTruck' : '/api/unfavoriteTruck',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					truckId: truck.id,
				},
			})
		},
	},
}
</script>

<style lang="scss" scopped>
@import '~assets/css/truckCards.scss';
body {
	background: url(~assets/location.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	height: 100vh;
}
</style>
