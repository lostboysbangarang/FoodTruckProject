<template>
    <div>
        <div class="locationbar">
            <div class="locationbar_wrapper">
                <div class="locationbar_wrapper_icon">
                    <Location/>
                </div>
                <div class="locationbar_wrapper_location">
                    {{getIpInfo.location && getIpInfo.location.city}}
                    <!-- {{getIpInfo.location.city}} -->
                </div>
                <!-- <button @click="yelp">Click me</button> -->
            </div>
        </div>
        <div class="truck">
            <div 
                    v-for="(trucks, index) in getTrucks"
                    :id="index"
                    :ref="index"
                    :key="trucks && trucks.name"
                    class="trucks">
                <div	
						:ref="index + ' name'" 
						class="name">{{trucks && trucks.name}}</div>
                <div	
						:ref="index + ' image'"
						class="image">
                    <img :src="trucks && trucks.image_url" :alt="trucks && trucks.alias">
                </div>
                <div :ref="index + ' open'" class="open">
                    <div v-if="trucks && !trucks.is_closed">
                        Open Now!
                    </div>
                    <div v-else>
                        Closed Unfortunately!
                    </div>
                </div>
                <div :ref="index + ' contact'" class="contact">
                    <div>{{trucks && trucks.display_phone}}</div>
                    <div>{{trucks && trucks.location && trucks.location.display_address[0]}}<br/>{{trucks && trucks.location && trucks.location.display_address[1]}}<span v-if="trucks && trucks.location && trucks.location.display_address[2]"> {{trucks && trucks.location && trucks.location.display_address[2]}}</span>
                    
                    <br/><a :href="trucks && trucks.url">Check out their site!</a></div>
                </div>
                <label v-if="trucks && trucks.booleen" id="left" class="like">
                    <input	
							:id="index+'checkbox'"
							type="checkbox"
							:checked="trucks && trucks.booleen" :disabled="trucks && trucks.booleen"/>
                    <div class="hearth"/>
                </label>
                <label 	
						v-else-if="trucks && !trucks.booleen"
						id="right"
						class="like">
                    <input 	
							:id="index+'checkbox'"
							type="checkbox"
							:checked="trucks && trucks.booleen"
							:disabled="trucks && trucks.booleen"
							@change="saved(index)"/>
                    <div class="hearth"/>
                </label>
            </div>
        </div>
        <!-- <TruckList /> -->
        <div class="background">
            <div class="background_left">
                <div class="background_left_angle"></div>
            </div>
            <div class="background_right"></div>\
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Location from '~/assets/svgs/locationIII.svg?inline'

export default {
	name: 'TruckCard',
	components: {
		Location,
	},
	asyncData() {

	},
	data() {
		return {
			yelpResults: [],
			favs: [],
		}
	},
	fetch() {
		
	},
	computed: {
		...mapGetters('yelp',[
            'getIpInfo',
            'getTrucks'
		]),
        ...mapState(['yelp']),
	},
	async beforeCreate() {
		if(process.server) return;
		console.log(`\n\n\tbeforeCreate()\n\t\t\tgetJSON`);
		await this.$store.dispatch('yelp/getJSON', localStorage.getItem('yelpArry'))
			.then(() =>{
				this.$store.dispatch('yelp/getIPInfo', localStorage.getItem('ipConfig'))
			})
		console.log(`\n\tFetched in beforeCreate():\t`, this.getIpInfo.location && this.getIpInfo.location.city)

	},
	created() {

	},
	beforeMount() {

	},
	mounted() {
		console.log(this.getIpInfo)
	},
	beforeUpdate () {

	},
	updated() {

	},
	beforeDestroy () {

	},
	destroyed() {

	},
	methods: {
		saved(index) {
            this.$store.commit('yelp/addBooleen', {index})
            console.log("querySelector:\t", document.getElementById(`${index}checkbox`));
            document.getElementById(`${index}checkbox`).disabled = true;
            this.$store.dispatch('yelp/updateJSON', {objI: 'yelpArry', objII: this.getTrucks})
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
