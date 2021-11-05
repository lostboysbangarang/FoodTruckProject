// const { Router } = require('express')
// const { Sequelize } = require('sequelize')

import Vue from'vue';

Vue.mixin({
    methods: {
        test(value) {
            console.log(value);
        }
    }
})