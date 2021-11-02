<template>
<div>
  <Nav/>
  <Body/>
</div>
</template>

<script>
export default {
  mounted() {
      this.setAnimation()
    },

    methods: {
      setAnimation() {
        this.$anime({
          targets: '.title',
          translateX: 250,
          rotate: '1turn',
          backgroundColor: '#FFF',
          duration: 800
        })
      }
    }}
</script>

<style lang="scss">
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;

  }
</style>
