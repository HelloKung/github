import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.use(Router)

import platform from './module/platform';
import practice from './module/practice';
import module from './module/module';


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
        children:[]
                  .concat(platform)
                  .concat(practice)
                  .concat(module)
  
      },
  
]




export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
