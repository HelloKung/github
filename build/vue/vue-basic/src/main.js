// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/static/public/public.js'
import '@/static/public/js/prefect-scroll.js'
import App from './App'
import router from './router'
import store from './store'

import vcharts from 'v-charts'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import '@/styles/index.css'

import axios from 'axios'
Vue.prototype.$http = axios





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

})
