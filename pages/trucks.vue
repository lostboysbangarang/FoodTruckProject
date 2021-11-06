<template>
    <div>
        <Nav/>
        <Truckbody/>
    </div>
</template>

<script>
export default {
    name: 'TrucksPage',
    // beforeCreate: {
    //     function() {
    //         document.body.className = 'TrucksPage';
    //     }
    // }
}
</script>

<style scopped>
.TrucksPage {
    background: url(~assets/location.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
}

</style>