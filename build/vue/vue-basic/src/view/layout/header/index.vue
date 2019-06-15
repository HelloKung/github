<template>
   
  <div class="header-container"> 
    <div class="header-logo">
      <div class="title">vue-basic</div>
      <div class="ham-container">
        <div class="ham" @click="collapse">
          <i class="icon-menu" :class="{'is-active':isCollapse}" ></i>
        </div>  
      </div>
    </div>
    <div class="header-center-menu">
        <el-menu
          :default-active="activefirstMenuId"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          
            <el-menu-item v-for="item in headerMenuConfig" :index="item.id" :key="item.id">
              <template v-if="!item.href">
                  <i class="icon" :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
              </template>
              <template v-else="item.href">
                  <i class="icon" :class="item.icon"></i>
                  <a :href="item.href" target="_blank">{{item.title}}</a>
              </template>
              
            </el-menu-item>

        </el-menu>

    </div>
    <div class="header-right-menu" >
      <div class="user-container">       
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
    </div>

  </div>
</template>


<script>

import headerConfig from "@/config/layout/headerConfig.js";
import siderConfig from "@/config/layout/siderConfig.js";
import {getSession} from "@/utils/session";
  
  export default {
    
    data() {
    
      return {
        
         menuConfig:{},
         activeId:null

      };
    
    },
    components:{
     
    },
    methods: {
    
      handleSelect(key, keyPath) {
           
        this.$store.dispatch("changeHeaderAddRootTagView",key).then(res => {

            return this.$store.dispatch("setSiderMenu",key);
            
        }).then(res => {

            this.$store.dispatch("addTagView",getSession("activeSiderMenuId"))
        });   
        
        

      },
      renderMenu(){

           this.$store.dispatch("renderMenu").then(res => {
                 
               
               return this.$store.dispatch("setSiderMenu",this.activefirstMenuId);
           
           }).then(res => {

              this.$store.dispatch("addTagView",getSession("activeSiderMenuId"))
           
           });

      
      },
      collapse(){

          this.$store.commit("SET_ISCOLLAPSE");

          
      },
      logout(){

          this.$store.dispatch("Logout").then(res => {


                this.$router.push({path: "/"});


          }).catch(err => {

              console.log(err);
          })

      },
      setting(){


      },
         
    
    },
    computed:{
 
       isCollapse(){

            return this.$store.state.menu.isCollapse;
       },
       headerMenuConfig(){

           return this.$store.state.menu.headerMenuConfig; 
       },
       activefirstMenuId(){

           return this.$store.state.menu.activefirstMenuId;
       }


    },
    mounted(){

      this.renderMenu(); 
      
    }
  
  
  
  }

</script>

<style lang="less" scoped>

   .header-container{

      .header-logo{
       
          height: 50px;
          width: 200px;
          float: left;
          background: rgb(84, 92, 100);
          .title{

              height: 50px;
              line-height: 50px;
              width:140px;
              float: left;
              font-size:22px;
              color:#fff;
              padding-left: 20px;

          }
          .ham-container{
              
              height: 50px;
              width:50px;
              float: left;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .ham{

                 width: 30px;
                 height: 30px;
                 background: #fcaf41;
                 text-align:center; 
                 cursor:pointer;
                 box-sizing: border-box;
                 i{
                   color:#fff;
                   font-size:20px;
                   line-height: 30px;
                   display: block;
                   
                   transition: all 0.2s ease-in-out;
                 }
                 .is-active{
                   transform: rotate(90deg); 
                 }
              }
          }
      }
      
      .header-center-menu{

          height: 50px;
          width:calc(100% - 600px);
          float:left;
          .el-menu{
            border-bottom:none;
            .el-menu-item{
                height: 50px;
                line-height: 50px;
                i{

                    color: #fff;
                    margin-right:4px;
                }
                
            }
          }
          .is-active{
                 
              i{

                 color: #fcaf41;
                 margin-right:4px;
              }    
          }
         

      } 
      
      .header-right-menu{

          width:400px;
          float: left;
          height: 50px;
          background: rgb(84, 92, 100);
          .user-container{
            width:120px;
            height: 50px;
            float: right;
          }
      }

   }
   
</style>