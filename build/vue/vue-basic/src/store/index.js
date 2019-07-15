import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'
import user from './module/user'
import tagview from './module/tagview'
import config from './module/config'  ///自定义配置

Vue.use(Vuex)




const store = new Vuex.Store({
  
  modules: {
      
      user, 
      menu,
      tagview,
      config
      
  }

})


export default store
