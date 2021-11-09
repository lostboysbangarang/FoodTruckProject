<template>
<!-- <div></div> -->
    <div class="truck">
    <!-- <button @click="test">Click</button> -->
        <div 
                v-for="(trucks, index) in list"
                :id="index"
                :ref="index"
                :key="trucks && trucks.alias"
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
                <div>{{trucks && trucks.location && trucks.location.display_address[0]}}<br/>{{trucks && trucks.location && trucks.location.display_address[1]}}<span v-if="trucks && trucks.location && trucks.location.display_address[2]"> {{trucks && trucks.location && trucks.location.display_address[2]}}</span> <br/><a :href="trucks && trucks.url">Check out their site!</a></div>
            </div>
            <label v-if="trucks && trucks.booleen" id="left" class="like">
                <input 
                        :id="index+'checkbox'"
                        type="checkbox" 
                        :checked="trucks && trucks.booleen"
                        :disabled="trucks && !trucks.booleen"
                        @change="saved(index)"/>
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
                        :disabled="trucks && !trucks.booleen"/>
                <div class="hearth"/>
            </label>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
// import savedJPG from '~/assets/saved.jpg';
import { mapGetters} from 'vuex'
export default {
    name: 'SavedTrucksCard',
    asyncData() {

	},
	data() {
		return {
			// list: this.getSaved
		}
	},
	fetch() {
		
	},
	computed: {
		...mapGetters('yelp',[
			'getIpInfo',
            'getTrucks',
            'getSaved',
            'getLocal'
		]),
        list(){
            return this.getSaved
        }
	},
	async beforeCreate () {
		if(process.server) return;
        console.log(`\n\n\n\t\t\tbeforeCreate()\n\n`, this.getSaved)
		await this.$store.dispatch('yelp/getJSONTrucks', localStorage.getItem('savedTrucks'))
        console.log(`\n\n\n\t\t\tAfter beforeCreate()\n\n`, this.getSaved)
	},
	created() {

	},
	beforeMount() {

	},
	mounted() {
		console.log(`HELP`, this.list)
	},
	beforeUpdate () {

	},
	updated() {

	},
	beforeDestroy () {

	},
	destroyed() {
        // forEach()
	},
	methods: {
		saved(index) {
            console.log("Remove")
            this.$store.commit('yelp/removeBooleen', {index})
            document.getElementById(`${index}checkbox`).disabled = true;
            delete this.list[index]
            this.$store.dispatch('yelp/updateJSON', {objI: 'savedTrucks', objII: this.getSaved})
            console.log(this.getLocal)
            localStorage.removeItem('savedTrucks')
            const setSaved = JSON.parse(JSON.stringify(this.getLocal))
            localStorage.setItem('savedTrucks', JSON.stringify(setSaved))
            console.log(JSON.parse(localStorage.getItem('savedTrucks')))
            this.$store.dispatch('yelp/maybeThis')

        }

	},
}
</script>

<style lang="scss" scoped>
    @import '~assets/css/truckCards.scss';
    // @import '~assets/saved.jpg';
    // body#savedTrucks {
    //     // background: url(_nuxt/assets/saved.jpg);
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     background-position: center;
    //     background-attachment: fixed;
    //     height: 100vh;
    // }

</style>