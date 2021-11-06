<template>
    <div>
        <div class="locationbar">
            <div class="locationbar_wrapper">
                <div class="locationbar_wrapper_icon">
                    <Location/>
                </div>
                <div class="locationbar_wrapper_location">
                    {{info.city}}
                </div>
            </div>
        </div>
        <div class="truck">
            <div 
                    v-for="(trucks, index) in yelpResults"
                    :ref="index"
                    :key="trucks.alias"
                    :id="index"
                    class="trucks">
                <div :ref="index + ' name'" class="name">{{trucks.name}}</div>
                <div :ref="index + ' image'" class="image">
                    <img :src="trucks.image_url" :alt="trucks.alias">
                </div>
                <div :ref="index + ' open'" class="open">
                    <div v-if="!trucks.is_closed">
                        Open Now!
                    </div>
                    <div v-else>
                        Closed Unfortunately!
                    </div>
                </div>
                <div :ref="index + ' contact'" class="contact">
                    <div>{{trucks.display_phone}}</div>
                    <div>{{trucks.location.address1}}<br/>{{trucks.location.city}} {{trucks.location.state}}<br/><a :href="trucks.url">Check out their site!</a></div>
                </div>
                <label class="like">
                    <input @click="saved(index)" type="checkbox"/>
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
        <button @click="yelp">Click me</button>
    </div>
</template>


<script>
// import { ValidationObserver, ValidationProvider } from 'vee-validate'
import axios from 'axios';
// import qs from 'qs'
// import {jsonp} from 'vue-jsonp';
// import {testing} from 'yelp';
import Location from '~/assets/svgs/locationIII.svg?inline';
// const yelp = require('~/api/scripts/yelp.js');
// import
export default {
    name: 'TruckCard',
    // head() {
    //     return {
    //         script: [
    //             {src: 'js/yelp.js', type: 'text/javascript'}
    //         ],
    //     }
    // },
    components: {
        Location,
        // ValidationObserver,
        // ValidationProvider,

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
            // yelp: {
            //     term: 'foodtruck',
            //     lat: null,
            //     lon: null,
            // },
            search: {
                'term': 'foodtruck',
                'latitude': '',
                'longitude': '',
                'limit': '36',
                'radius': '40000'

            },
            yelpResults: [],
            mobile: false,
        }
    },
    // computed: {
    //     backgroundImage() {
    //         return {
    //             backgroundImage: url(${{{trucks.image_url}}})
    //         }
    //     }
    // },
    async mounted() {
        try {
            const location = await axios.get('http://ip-api.com/json/')
            // console.log(location);
            this.info.city = location.data.city;
            this.info.ip = location.data.query;
            this.info.lat = location.data.lat;
            this.info.lon = location.data.lon;
            this.info.state = location.data.regionName;
            this.info.zip = location.data.zip;
            console.log(this.info);
        }
        catch (e) {
            console.log(e);

        }
        try {
            this.screenSize();    
        }
        catch (e) {
            console.log(e)
        }
        try {
            axios({
                method: 'get',
                url: '/api/yelpTrucks',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    'term': this.search.term,
                    'latitude': this.info.lat,
                    'longitude': this.info.lon,
                    'radius': this.search.radius,
                    'limit': this.search.limit
                }
            }).then(response => {
                // const outline = {

                // }
                //   this.yelpResults = response.data;
                //  //  console.log(this.yelpResults.alias);
                response.data.forEach(element => {
                    // console.log(element.alias);
                    element.alias = element.alias.split('-').join(' ');
                    element.image_url = element.image_url.split(`"`).join('');
                    element.url = element.url.split(`"`).join('');
                    // console.log(element.image_url)
                    this.yelpResults.push(element);
                    // const outline = {
                    //     name = '',

                    // }
                    // console.log(element);
                })
                // console.log(this.yelpResults);
            })
            
            // console.log("HELP", yelpResults.data)
        }
        catch (e) {
            console.log(e)
        }
        try {
            document.body.className = "localTrucks";
        }
        catch (e) {
            console.log(e)
        }
    },
    
    methods: {
        screenSize() {
            if(process.browser) {
                // console.log(window)
                if(window.innerWidth < 1200) {
                    this.mobile = true;
                    console.log(this.mobile);
                }
            }
        },
        yelp() {
            console.log(this.yelpResults);
        },
        saved(mealsOnWheels) {
            console.log(this.$refs[mealsOnWheels][0]);
        }

    },

}
</script>

<style lang="scss" scopped>
    @import '~assets/css/truckCards.scss';
    .localTrucks {
        background: url(~assets/location.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
    }
</style>