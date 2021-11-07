<template>
<!-- <div></div> -->
    <div    
        v-if="check"
        class="truck">
        <div     
                v-for="(trucks, index) in cards"
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
                <div>{{trucks.address1}}<br/>{{trucks.city}} {{trucks.state}}<br/><a :href="trucks.url">Check out their site!</a></div>
            </div>
            <label class="like">
                <input @click="saved(index)" type="checkbox"/>
                <div class="hearth"/>
            </label>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import savedJPG from '~/assets/saved.jpg';
export default {
    name: 'SavedTrucksCard',
    data() {
        return {
            cards: [],
            cardTemplate: {
                alias: '',
                name: '',
                image_url: '',
                is_closed: '',
                display_phone: '',
                address1: '',
                city: '',
                state: '',
                url: '',
            },
            check: false,
        }
    },
    async mounted() {
        // document.body.id = "savedTrucks";
        // const crying = document.getElementById('savedTrucks');
        // crying.style.backgroundImage = "url(/_nuxt/assets/saved.jpg)";
        // crying.style.backgroundRepeat = "no-repeat";
        // crying.style.backgroundSize = "cover";
        // crying.style.backgroundPosition = "center";
        // crying.style.backgroundAttachment = "fixed";
        // crying.style.height = "100vh";
        const tryThis = await axios.get('/api/trucks');
        console.log("YOOOOO",tryThis.data);
        if (tryThis.data.length === 0) {
            this.check = false;
        } else {
            this.check = true;
        }
        
        tryThis.data.forEach(element =>{
            this.cardTemplate.name = element.yelp_name;
            this.cardTemplate.image_url = element.image_url;
            this.cardTemplate.alias = element.alias;
            this.cardTemplate.is_closed = element.is_closed;
            this.cardTemplate.display_phone = element.display_phone;
            this.cardTemplate.address1 = element.address1;
            this.cardTemplate.city = element.city;
            this.cardTemplate.state = element.yelp_state;
            this.cardTemplate.url = element.yelp_url;
            this.cards.push(this.cardTemplate);
        })


        console.log("HOOOOO", this.cards);
        // this.cards.push(this.cardTemplate);
        // console.log(this.cards);
    },
    // computed: {
    //     function() {
    //         if(process.browser) {
    //             return document.body.style.backgroundImage = "url(~assets/saved.jpg)";
    //         }
    //     }
    // },
    methods: {
        async test() {
            const tryThis = await axios.get('/api/trucks');
            // console.log(tryThis.data[0]);
            this.cardTemplate.child_I_innerHTML = tryThis.data[0].child_I_innerHTML;
            this.cardTemplate.child_II_child_src = tryThis.data[0].child_II_child_src;
            this.cardTemplate.child_II_child_alt = tryThis.data[0].child_II_child_alt;
            this.cardTemplate.child_III_child_innerHTML = tryThis.data[0].child_III_child_innerHTML;
            this.cardTemplate.child_IV_child_I_innerHTML = tryThis.data[0].child_IV_child_I_innerHTML;
            this.cardTemplate.child_IV_child_II_child_I_innerHTML = tryThis.data[0].child_IV_child_II_child_I_innerHTML;
            this.cardTemplate.child_IV_child_II_child_II_innerHTML = tryThis.data[0].child_IV_child_II_child_II_innerHTML;
            this.cardTemplate.child_IV_child_II_child_III_href = tryThis.data[0].child_IV_child_II_child_III_href;

            console.log(this.cardTemplate);
            this.cards.push(this.cardTemplate);
            console.log(this.cards);
            // const element_string =
            //     `   < 
            //         v-for="(trucks, index) in yelpResults"
            //         :ref="index"
            //         :key="trucks.alias"
            //         :id="index"
            //         class="trucks">
            //     <div :ref="index + ' name'" class="name">{{trucks.name}}</div>
            //     <div :ref="index + ' image'" class="image">
            //         <img :src="trucks.image_url" :alt="trucks.alias">
            //     </div>
            //     <div :ref="index + ' open'" class="open">
            //         <div v-if="!trucks.is_closed">
            //             Open Now!
            //         </div>
            //         <div v-else>
            //             Closed Unfortunately!
            //         </div>
            //     </div>
            //     <div :ref="index + ' contact'" class="contact">
            //         <div>{{trucks.display_phone}}</div>
            //         <div>{{trucks.location.address1}}<br/>{{trucks.location.city}} {{trucks.location.state}}<br/><a :href="trucks.url">Check out their site!</a></div>
            //     </div>
            //     <label class="like">
            //         <input @click="saved(index)" type="checkbox"/>
            //         <div class="hearth"/>
            //     </label>
            // </div>
            
            
            // `

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