import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers=[

      {
        path: '',
        redirect: '/index',
        
      },{

        path: '/index',
        name: "index",
        component:() => import("../pages/index.vue")

      }
      
  
]




export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
