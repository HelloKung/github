<template>
  <div>
     <el-container style="height:100%">
      <el-header style="height:10%;">
         <div class="logo">
            <i class="icon-youtube2" ></i>
         </div>
         <div>
           <el-m-header  @gethd="getheader" ></el-m-header>
         </div>
      </el-header  >
      <el-container style="height:90%;">
        <el-aside>
           <el-m-sider :headerMenuId="headerMenuId" ref="siderfun" ></el-m-sider>
           <!-- ref调用子组件方法 -->
        </el-aside>
        <el-main style="padding:0px; box-sizing:border-box;">
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container> 
  </div>    
</template>

<script>

import header from './header/index.vue'
import sider  from './sider'


  export default {
    
       data(){

           let data={

                
                 num:0,
                 headerMenuId:"",

           }
   
           return data;
       },
       created(){

            console.log(this.$router);

       },
       methods: {

         getheader(data) {
   
            console.log("父组件穿回来的值：",data);
            this.headerMenuId = data;
          //   this.$router.push({ path: '/login' })
            this.$refs.siderfun.siderMenuRender(this.headerMenuId);

         },
         getPath(){

           return '/login';
         }

       },
       components:{

          'el-m-header': header,
          'el-m-sider': sider,
          

       }
  
  }


</script>






<style>

    html,body,#app,#app>div {

      padding: 0px;
      margin: 0px;
      height: 100%;
      overflow: hidden;
    }
    
    div{
      
      box-sizing: border-box;

    }
    
    .main{

      padding: 10px 20px;
    }


    .el-header {

      padding: 0px;
      font-size: 0px;
     
    }
    .el-header >div {
       
       display: inline-block;
       position: relative;
       
    }
    .el-header>div:nth-child(1) {
       
       width: 15%;
       background: #535c63;
       height: 100%;
       text-align: center;
       float: left;
    }
    .el-header>div:nth-child(2) {
       
       width: 85%;
       float: left;
    }
    .el-aside {

      width: 15% !important;
      background: #535c63
    }
    .el-aside::-webkit-scrollbar{

      display:none;

    }

    .el-row {

      width: 100%;
    }
    .el-main {

      background-color: #fff;
    
    }
    .icon-youtube2 {

       color:#f5d049 !important;
       font-size: 30px;
       vertical-align: middle;
       height: 100%;
       line-height: 60px;
    }
    .main-enter,.main-leave-to {
      opacity: 0;
      transform: translateX(50px)
    }
    .main-enter-active,.main-leave-active {
      transition: all 0.5s ease
    }
 


</style>
