<template>
  <div class="truck">
            <div 
                    v-for="(trucks, index) in yelpResults"
                    :key="trucks.alias"
                    :id="index"
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
                    <div><span>{{trucks.location.address1}}<br/>{{trucks.location.city}} {{trucks.location.state}}</span><br/><a class="webbie" :href="trucks.url"><span>Check out their site!</span></a></div>
                </div>
                <label class="like">
                    <input @change="save(index)" type="checkbox"/>
                    <div class="hearth"/>
                </label>
            </div>
        </div>
</template>

<script>
// import TruckCard from '@/components/'
export default {
    name: 'TruckList',
    // components: {
    //     TruckCard
    // }
}
</script>

<style>

</style>