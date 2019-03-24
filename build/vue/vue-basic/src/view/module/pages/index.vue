<template>
    <div class="box-100 pad-20">
        这是模块打包
     <hr/>
        
     <el-card class="box-card" >
        <div slot="header" class="clearfix">
            <span>组件引用</span>
        </div>
        <div style="height:80px">
            <span>module模块下product子工程index路由对应页面</span><br><br>
            <product-index/>
        </div>
     </el-card>
     
     <hr/>
     <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>iframe路径引入</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handleClickChangePage">切换路由</el-button>
        </div>
        <div>
            <span>module模块下product子工程index路由对应页面</span><br><br>
            <iframe :src="iframe_src" style="width:100%"></iframe>
        </div>
     </el-card>
     

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

             iframe_src:"./module.html#/index",
             timelist:[]
        }

        return data;
    },
    methods:{
        
        handleClickChangePage(){

             this.iframe_src = this.iframe_src == "./module.html#/index" ? "./module.html#/home" : "./module.html#/index";

        }

    },
    mounted(){


    
        
        


    }


}
</script>
