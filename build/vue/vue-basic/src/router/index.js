import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import platform from './module/platform';
import practice from './module/practice';
import module from './module/module';




const routersConfig=[
       
      {
        path: '/',
        redirect: '/login',

      },
      {
        path: '/login',
        name: 'login',
        component:()=>import('@/view/login')
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


const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  // mode:"history",
  routes: routersConfig
})




export default router;
