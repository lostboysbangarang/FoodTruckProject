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
                    v-for="trucks in yelpResults"
                    :key="trucks.alias"
                    class="trucks">
                <div class="name">{{trucks.name}}</div>
                <div class="image">
                    <img :src="trucks.image_url" alt="">
                </div>
                <div class="open">
                    <div v-if="!trucks.is_closed">
                        Open Now!
                    </div>
                    <div v-else>
                        Closed Unfortunately!
                    </div>
                </div>
                <div class="contact">
                    <div><span>{{trucks.display_phone}}</span></div>
                    <div><span>{{trucks.location.address1}}<br/>{{trucks.location.city}} {{trucks.location.state}}</span></div>
                </div>
            </div>
        </div>
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
                'limit': '21',
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
        // try {
        //     console.log("HELP", this.yelpResults)
        // }
        // catch (e) {
        //     console.log(e)
        // }
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
        }

    }
}
</script>

<style lang="scss" scopped>
    .locationbar {
        height: 60px;
        width: 100vw;
        background-color: #8FC0A9;
        z-index: 10;
        display: flex;
        justify-content: center;
        &_wrapper {
            position: relative;
            top: -12%;
            height: 100%;
            width: 20%;
            min-width: 200px;
            background-color: #B583A6;
            border-radius: 30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            &_icon {
                left: 4%;
                position: relative;
                height: 80%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: fit-content;
            }
            &_location {
                position: relative;
                // float: left;
                right: 8%;
                font-size: 2vw;
                @media (max-width: 1200px) {
                    font-size: 24px;
                }
                // width: 60%;
                // height: 100%;
                // background-color: #8FC0A9;

                
            }
        }
    }
    .truck {
        width: 90vw;
        height: fit-content;
        display: flex;
        margin-left: 5vw;
        margin-top: 60px;
        flex-wrap: wrap;
        justify-content: space-around;
        &s {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            width: 30%;
            min-width: 360px;
            height: 540px;
            border-radius: 24px;
            // background-color: red;
            background-color: rgba(104, 176, 171, 0.9);
            margin-bottom: 6%;
            .name {
                font-family: 'Shrikhand', 'cursive';
                font-size: 24px;
                margin-top: 6%;
                text-align: center;
            }
            .image {
                width: 90%;
                height: 50%;
                // background-color: blue;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            .open {
                font-family: 'Shrikhand', 'cursive';
                font-size: 24px;
                margin-top: 6%;
            }
            .contact {
                margin-top: 4%;
                font-size: 32px;
                text-align: center;
            }
        }
    }
    body {
        background: url(~assets/location.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
    }
</style>