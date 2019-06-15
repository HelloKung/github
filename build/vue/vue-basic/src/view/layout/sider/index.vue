<template>
   <section class="siderbar">
    <!-- :collapse="isCollapse" -->
    <el-menu
        :default-active="rootMenuId"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        
       >
       <transition-group name="el-fade-in"> 
         <template v-if="show">
           <sider-item v-for="item in siderMenu" :key="item.id" :option="item"></sider-item> 
         </template>
       </transition-group>
    </el-menu>
         
   </section>
</template>


<script>

  import { mapActions } from 'vuex' 

  import  siderItem from './siderItem.vue'

  import {getSession} from "@/utils/session";

  export default {
    
    data(){

        let data={


            show:true

        }
        
        return data;
    },
    props:["headerMenuId"],
    components:{
       siderItem
    },
    methods: {
     
      siderMenuRender(headerMenuId){

          console.log("侧边栏接收数据",headerMenuId);   

      },
      handleOpen(key, keyPath) {
         
         
         console.log(key, keyPath);
      
      },
      handleClose(key, keyPath) {

        console.log(key, keyPath);
      
      },
      handleSelect(key, keyPath){

        //设置当前点击菜单id
        
        this.$store.dispatch("addTagView",key);
        this.$store.dispatch("setActiveSiderMenuId",key);
         
      }
    },
    computed:{

        siderMenu(){
            
            return this.$store.state.menu.siderMenu;
            
        },
        rootMenuId(){

            return this.$store.state.menu.rootMenuId;
        },
        isCollapse(){

            return this.$store.state.menu.isCollapse;
        }
    },
    mounted(){

    }
  }

</script>


<style scoped>

  .el-menu {

     border: none;
  }

  .siderbar{

     height: 100%;
     background:#545c64;

  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>