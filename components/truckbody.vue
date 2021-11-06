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
                    <input :id="index+'like'" :ref="index+'like'" @change="saved(index)" type="checkbox" />
                    <div class="hearth"/>
                </label>
                <!-- <label v-else-if="!checks.index" class="like">
                    <input :id="index+'like'" :ref="index+'like'" @change="saved(index)" type="checkbox" checked/>
                    <div class="hearth"/>
                </label> -->
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
            checks: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false,
                24: false,
                25: false,
                26: false,
                27: false,
                28: false,
                29: false,
                30: false,
                31: false,
                32: false,
                33: false,
                34: false,
                35: false,

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
            yelpSave: {
                name: '',
                index_num: '',
                image_url: '',
                alias: '',
                is_closed: '',
                display_phone: '',
                address1: '',
                city: '',
                state: '',
                url: '',
                checkbox: '',
            },
            mobile: false,
            whyMe: this.why,
        }
    },
    props: {
        why: String
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
            // this.checkMeOut();
            // console.log(crying);
            // crying.forEach(element => {
            //     console.log("YOOOOOOOOOOOOOOO", element)
            // })
            // , res => {
            //     res.forEach(element => {
            //         console.log("YOOOOOOOOOOO", element)
            //     })
            // })
            axios.get('/api/checkHeart').then((response) => {
                console.log(response);
                response.data.forEach(element => {
                    console.log(element.index_num);
                    const indexPos=element.index_num;
                    this.checks[indexPos]=true;
                    // const stringy = `${element.index_num}like`
                    // console.log(Array.prototype.slice.call(document.querySelectorAll('trucks')));
                    // const divs = document.getElementsByClassName('trucks')
                    // const arr = Array.prototype.slice.call(divs)
                    // console.log(arr[11])
                    // document.getElementById(stringy).disabled=true;
                    // this.$nextTick(function () {
                    //     console.log(stringy);
                    //     console.log("YYYYYYYOOOOOOOOOOO",this.$refs)
                    //     const whyyyy = this;
                    //     console.log(whyyyy);
                    //     // console.log(this.vModel)
                    //     // this.$refs.forEach(element => {
                    //     //     console.log(element)
                    //     // })

                    // })
                    // if(client.browser) {
                    // }
                })
            })
            this.$forceUpdate();
            console.log(this.checks)
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
            console.log(this.yelpSave);
        },
        // checkMeOut() {
        //     axios.get('/api/checkHeart').then((response) => {
        //         console.log(response);
        //         response.data.forEach(element => {
        //             console.log(element.index_num);
        //             const stringy = `${element.index_num}like`
        //             console.log(stringy);
        //             console.log(Array.prototype.slice.call(document.querySelectorAll('trucks')));
        //             const divs = document.getElementsByClassName('trucks')
        //             const arr = Array.prototype.slice.call(divs)
        //             console.log(arr[11])
        //             document.getElementById(stringy).disabled=true;
        //             console.log(this.$refs[`${element.index_num}like`])
        //             // if(client.browser) {
        //             // }
        //         })
        //     })
        // },
        async saved(mealsOnWheels, reffie) {
            console.log("SHIT", reffie);
            console.log(mealsOnWheels);
            await axios({
                method: 'get',
                url: '/api/yelpID',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    'term': this.search.term,
                    'latitude': this.info.lat,
                    'longitude': this.info.lon,
                    'radius': this.search.radius,
                    'limit': this.search.limit,
                    // 'id': mealsOnWheels
                }
            }).then(response => {
                console.log(response.data[mealsOnWheels]);
                // console.log(yelpSave);
                this.yelpSave.index_num = mealsOnWheels;
                this.yelpSave.checkbox = true;
                this.yelpSave.name = response.data[mealsOnWheels].name;
                this.yelpSave.image_url = response.data[mealsOnWheels].image_url;
                this.yelpSave.alias = response.data[mealsOnWheels].alias;
                this.yelpSave.is_closed = response.data[mealsOnWheels].is_closed;
                this.yelpSave.display_phone = response.data[mealsOnWheels].display_phone;
                this.yelpSave.address1 = response.data[mealsOnWheels].location.address1;
                this.yelpSave.city = response.data[mealsOnWheels].location.city;
                this.yelpSave.state = response.data[mealsOnWheels].location.state;
                this.yelpSave.url = response.data[mealsOnWheels].url;
                axios.post('/api/saveYelp', this.yelpSave).then(response => {
                    console.log(response);
                })
                // const outline = {

                // }
                //   this.yelpResults = response.data;
                //  //  console.log(this.yelpResults.alias);
                // response.data.forEach(element => {
                //     // console.log(element.alias);
                //     element.alias = element.alias.split('-').join(' ');
                //     element.image_url = element.image_url.split(`"`).join('');
                //     element.url = element.url.split(`"`).join('');
                //     // console.log(element.image_url)
                //     this.yelpResults.push(element);
                //     // const outline = {
                //     //     name = '',

                //     // }
                //     // console.log(element);
                // })
                // console.log(this.yelpResults);
            })
        }

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