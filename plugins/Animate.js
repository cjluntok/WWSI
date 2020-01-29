import Vue from 'vue'

import AnimateWhenVisible from '~/components/animations/AnimateWhenVisible.vue'
import AppAnimate from '~/components/animations/AppAnimate.vue'
Vue.component('AnimateWhenVisible', AnimateWhenVisible)
Vue.component('AppAnimate', AppAnimate)

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)