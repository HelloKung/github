import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'
import user from './module/user'
import tagview from './module/tagview'

Vue.use(Vuex)




const store = new Vuex.Store({
  
  modules: {
      
      user, 
      menu,
      tagview
      
  }

})


export default store
