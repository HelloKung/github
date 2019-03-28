import router from '../../router'
import store from '../../store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/session' // getToken from cookie

NProgress.configure({ showSpinner: false });


router.beforeEach((to,from,next) => {


      NProgress.start();
      
      if(getToken()){ ///登录了

          if(to.path == "/login"){

             next({path:"/layout"});

             NProgress.done();
          
          }else{

             next();
             NProgress.done();
          }  



      }else{

        if(to.path == "/login"){

            next();
            NProgress.done(); 

        }else{
            
            next({path:"/login"});
            NProgress.done(); 
           

        } 
            
      }



})


router.afterEach(() => {
    NProgress.done() // finish progress bar
})
