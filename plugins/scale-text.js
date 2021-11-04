import Vue from 'vue';
// import VueResizeText from 'vue-resize-text';

// Vue.use(VueResizeText)
if (process.browser) {
    window.onNuxtReady(() => {
        const VueResizeText = require('vue-resize-text');
        Vue.component('v-resize-text', VueResizeText);
        Vue.use(VueResizeText);
    })
}