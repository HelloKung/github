<template>
  <div class="container">
      <div class="header-container">
           <header-bar/>
      </div>
      
      <div class="main-container">
        
        <sider-bar class="siderbar-container" :class="{'close-siderbar':isCollapse}"/>
           
        <div class="view-container" :style="{width:!isCollapse?'calc(100% - 200px)':'calc(100% - 64px)'}">
          <tag-view/>
          <app-main/>
        </div>
      </div>
   
  </div>    
</template>

<script>

import header   from './header'
import sider    from './sider'
import tagview  from './tagview'
import appmain  from './appmain'



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

         
        

       },
       components:{

          'headerBar': header,
          'siderBar': sider,
          'tagView': tagview,
          'appMain': appmain
       },
       computed:{

          isCollapse(){

            return this.$store.state.menu.isCollapse;
          }

       }
  
  }


</script>






<style lang="less" scoped>

    
    .container{

       width:100%;   
       height:100%;
       position: relative;
       .header-container{
           
          width:100%;
          height:50px;

       }
       .main-container{

          width:100%;
          height: calc(100% - 50px);
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .siderbar-container{

            height:100%;
            

          }
          
          .view-container{

            height:100%;
            transition:  all 0.5s;
            
          }
       }

    }




    
    

</style>

<style lang="less">

.close-siderbar{

  .el-submenu__title,.el-tooltip{
    
    text-align:center;
    &>span{
        display: none;
    }
    &>.el-submenu__icon-arrow{
        display: none;
    }
    &>i{
        padding-right: 0px !important;
    }
  }
}

</style>
