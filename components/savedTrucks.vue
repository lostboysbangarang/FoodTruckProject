<template>
    <div class="truck">
        <!-- <button @click="test">click me</button> -->
        <div 
                v-for="(trucks, index) in cards"
                :ref="index"
                :key="trucks.alias"
                :id="index"
                :class="trucks.parent_class">
            <div :class="trucks.child_I_class">{{trucks.child_I_innerHTML}}</div>
            <div :class="trucks.child_II_class">
                <img :src="trucks.child_II_child_src" :alt="trucks.child_II_child_alt">
            </div>
            <div :class="trucks.child_IV_class">
                <div>{{trucks.child_IV_child_I_innerHTML}}</div>
                <div>{{trucks.child_IV_child_II_child_I_innerHTML}}<br/>{{trucks.child_IV_child_II_child_II_innerHTML}}<br/><a :href="trucks.child_IV_child_II_child_III_href">{{trucks.child_IV_child_II_child_IIII_innerHTML}}</a></div>
            </div>
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
                parent_type: 'div',
                parent_class: 'trucks',
                child_I_type: 'div',
                child_I_class: 'name',
                child_I_innerHTML: '',
                child_II_type: 'div',
                child_II_class: 'image',
                child_II_child_type: 'img',
                child_II_child_src: '',
                child_II_child_alt: '',
                child_III_type: 'div',
                child_III_class: 'open',
                child_III_child_type: 'div',
                child_III_child_innerHTML: '',
                child_IV_type: 'div',
                child_IV_class: 'contact',
                child_IV_child_I_type: 'div',
                child_IV_child_I_innerHTML: '',
                child_IV_child_II_type: 'div',
                child_IV_child_II_child_I_innerHTML: '',
                child_IV_child_II_child_I_innerHTML_break: 'br',
                child_IV_child_II_child_II_innerHTML: '',
                child_IV_child_II_child_II_innerHTML_break: 'br',
                child_IV_child_II_child_III_type: 'a',
                child_IV_child_II_child_III_href: '',
                child_IV_child_II_child_III_innerHTML: 'Check out their site!',
                child_V_type: 'label',
                child_V_class: 'like',
                child_V_child_I_type: 'input',
                child_V_child_I_type_type: 'checkbox',
                child_V_child_II_type: 'div',
                child_V_child_II_class: 'hearth',
            }
        }
    },
    async mounted() {
        document.body.id = "savedTrucks";
        const crying = document.getElementById('savedTrucks');
        crying.style.backgroundImage = "url(/_nuxt/assets/saved.jpg)";
        // crying.style.backgroundRepeat = "no-repeat";
        // crying.style.backgroundSize = "cover";
        // crying.style.backgroundPosition = "center";
        // crying.style.backgroundAttachment = "fixed";
        // crying.style.height = "100vh";
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
    body#savedTrucks {
        // background: url(_nuxt/assets/saved.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
    }

</style>