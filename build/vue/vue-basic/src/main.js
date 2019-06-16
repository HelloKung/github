// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


// 引入ElementUI 
import ElementUI  from 'element-ui'
Vue.use(ElementUI)


// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
 
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/config/languages/zh.json'),
    'en': require('@/config/languages/en.json'),
    'jp': require('@/config/languages/jp.json'),
  }
})


import '@/styles/index.css'


////axios接口////
import axios from 'axios'
Vue.prototype.$http = axios

////base64加密////
import {Base64} from 'js-base64';
Vue.prototype.$base64 = Base64;


//引入公共方法
import '@/utils/public/public.js';

//屏蔽报错
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)

})
