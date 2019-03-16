<template>
    <div>
        这是模块打包
     <hr/>
      模板加入的   
     <product-index/><br>   
     <hr/>
     iframe加入的
     <iframe src="./module.html#/index"></iframe>

    </div>
</template>


<script>

import productIndex from "../product/pages/index.vue"
import moment from "moment"
 

export default {
    
     components:{
         productIndex
     },
     data(){

        let  data = {

             
             timelist:[]
        }

        return data;
    },
    mounted(){


    
        
        


    }


}
</script>
