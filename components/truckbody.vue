<template>
    <div>
        <div class="locationbar">
            <div class="locationbar_wrapper">
                <div class="locationbar_wrapper_icon">
                    <Location/>
                </div>
                <div class="locationbar_wrapper_location" v-resize-text>
                    {{this.info.city}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ResizeText from 'vue-resize-text';
import Location from '~/assets/svgs/locationIII.svg?inline';
export default {
    name: 'TruckCard',
    components: {
        Location,

    },
    directives: {
        ResizeText
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
            }
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
                font-size: fit-content;
                width: 60%;
                height: 100%;
                background-color: #8FC0A9;

                
            }
        }
    }
</style>