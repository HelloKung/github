import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'
import user from './module/user'

Vue.use(Vuex)




const store = new Vuex.Store({
  
  modules: {
      
      user, 
      menu
      
  }

})


export default store
