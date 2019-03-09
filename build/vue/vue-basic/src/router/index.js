import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(Router)


const routers=[

      {
        path: '',
        redirect: '/login',

      },
      {
        path: '/login',
        name: 'login',
        component:()=>import('@/view/login/login')
      },
      {
        path: '/layout',
        name: 'layout',
        component:()=>import('@/view/layout/layout'),
        children:[

              {
                path: '/platform',
                name: 'platform',
                component:()=>import('@/view/platform')
              },
              {
                path: '/icon',
                name: 'icon',
                component:()=>import('@/view/platform/icon')
              },
              
              {
                path: '/ElementTable',
                name: 'ElementTable',
                component:()=>import('@/view/practice/table/ElementTable')
              },
              {
                path: '/chart',
                name: 'chart',
                component:()=>import('@/view/practice/chart')
              },

              

             
              
        ]
      },
  
]




export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
