import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'


Vue.use(Vuex)




const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    
    
    increment (state) {
        
    },
    router (state){
        
        state.router = "";
        
        if(1>2)
        axios.post("/router/getRouter",{

              
        }).then((req)=>{

              
              let result = req.data;
              let routers = [];

              for(let i = 0 ;i<req.data.length ;i++){

                   let rtd = result[i];

                   let component = rtd.component;

                   let rt = {

                      component(resolve){ require([`../${component}`],resolve)} 

                   }

                   rt.path = rtd.path;
                   rt.name = rtd.name;
                   rt.id = rtd.id;
                  
                   if(rtd.router_parent_id == "0"){
                     
                         routers.push(rt);
                   
                   }else{

                        routers.map(params=>{

                          if(params.id = rtd.router_parent_id){

                            if(!params.children){

                               params.children = [];
                            }

                            params.children.push(rt);


                          }

                          return  params;

                        })
                     

                   }

              }

          
              router.addRoutes(routers);
          


       }) 

    }
  },
  getters:{

    doneTodos: state => {
      
       return  state.count; 
    }

  },
  actions:{
    getRouter (context) {
      context.commit('router')
    }
  }

})

store.dispatch('getRouter')

export default store
