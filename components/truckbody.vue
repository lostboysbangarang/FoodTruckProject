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
        <div>
            <div>{{info.lat}}</div>
            <div>{{info.lon}}</div>
        </div>
        <ValidationObserver v-slot="{invalid}">
            <form :disabled="loading" @submit.prevent="test">
                <ValidationProvider
                                        v-slot="{errors}"
                                        name="search.lat"
                                        rules="required">
                    <div
                            class="form-group"
                            label="Lat:"
                            label-for="lat">
                        <input 
                                id="lat"
                                v-model="search.lat"
                                type="text"/>
                        <span class="input-invalid-message">{{errors[0]}}</span>

                    </div>

                </ValidationProvider>
                <button class="button" :disabled="invalid || loading">click me</button>
            </form>
        </ValidationObserver>
    </div>
</template>


<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import axios from 'axios';
import Location from '~/assets/svgs/locationIII.svg?inline';
export default {
    name: 'TruckCard',
    components: {
        Location,
        ValidationObserver,
        ValidationProvider,

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
            yelp: {
                term: 'foodtruck',
                lat: null,
                lon: null,
            },
            search: {
                lat: null,
                lon: null,
            },
            mobile: false,
        }
    },
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
        test(event) {
            this.test(event);
        }
    }
    // mounted: function() {
    // }
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
</style>