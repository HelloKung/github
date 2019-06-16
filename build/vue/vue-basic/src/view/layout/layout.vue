<template>
  <div class="container">
      <div class="header-container">
           <header-bar/>
      </div>
      
      <div class="main-container">
        
        <sider-bar class="siderbar-container" :class="{'close-siderbar':isCollapse}"/>
           
        <div class="view-container" :style="{width:!isCollapse?'calc(100% - 200px)':'calc(100% - 64px)'}">
          <tag-view/>
          <bread-crumb/>
          <app-main/>
        </div>
      </div>
   
  </div>    
</template>

<script>

import header   from './header'
import sider    from './sider'
import tagview  from './tagview'
import breadcrumb  from './breadcrumb'
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

            notify(){

               
                this.$notify({
                  title: '工程介绍',
                  dangerouslyUseHTMLString: true,
                  message: `
                                    
                                <p>欢迎来到 yitiaoxianyu 的 vue-base 项目</p><br/>
                                功能介绍：<br/>
                                <p style="text-indent:10px;">工程包括菜单栏，标签栏，收藏栏，模糊查询，封装表格和一些图形，
                                  地图展示，语言切换，elementUI自定义主题。</p><br/>
                                <span style="color:#ff0000">注意:</span>
                                <p style="text-indent:10px;color:#ff0000">elementUI自定义主题,登录,登出需在连接外网情况下才能使用</p><br/>
                            `,
                  offset: 40
                });

            }
        

       },
       components:{

          'headerBar': header,
          'siderBar': sider,
          'tagView': tagview,
          'breadCrumb':breadcrumb,
          'appMain': appmain
       },
       computed:{

          isCollapse(){

            return this.$store.state.menu.isCollapse;
          }

       },
       mounted(){

          this.notify(); 

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
