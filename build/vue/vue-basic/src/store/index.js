import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'

Vue.use(Vuex)




const store = new Vuex.Store({
  
  modules: {
       
      menu
      
  }

})


export default store
