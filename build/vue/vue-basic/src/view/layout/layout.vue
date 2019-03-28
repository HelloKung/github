<template>
  <div>
     <el-container style="height:100%">
      <el-header style="height:10%;">
         <div class="header-logo">
            <i class="icon-youtube2" ></i>
         </div>
         <div class="header-center-menu">
           <el-m-header  @gethd="getheader" ></el-m-header>
         </div>
         <div class="header-right-menu" >
           
           <div class="box-100" style="font-size:20px;  display:flex; align-items:center;justify-content:center; color:#fff;">
             <i class="icon-user"></i> 
             <el-dropdown trigger="click">
                <span style="margin-left:10px;cursor:pointer; color:#fff;font-size:18px;">admin</span>
             <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-setting" >
                   <span @click="setting">设置</span>
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-news" >
                   <span @click="logout">登出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
             
           </div>
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
import sider  from './sider/index.vue'


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
         setting(){


         },
         logout(){

              this.$store.dispatch("Logout").then(res => {


                    this.$router.push({path: "/"});


              }).catch(err => {

                 console.log(err);
              })



         }

       },
       components:{

          'el-m-header': header,
          'el-m-sider': sider,
          

       }
  
  }


</script>






<style scoped>

    
    
    
    
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
       
       width: 75%;
       float: left;
       height: 100%;
    }
    
    .el-header>div:nth-child(3) {
       
       width: 10%;
       background: #535c63;
       float: left;
       height: 100%;
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
    .header-logo{
       
       display: flex;
       align-items: center;
       justify-content: center;

    }
    .header-logo > i{
      
       color:#f5d049 !important;
       font-size: 30px;
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
