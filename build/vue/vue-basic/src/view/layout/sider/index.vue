<template>
   <section class="siderbar">
      <div class="siderbar-scrollbar">
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
      </div>       
    </section>
</template>


<script>

  import { mapActions } from 'vuex' 

  import  siderItem from './siderItem.vue'

  import {getSession} from "@/utils/session";

  import PerfectScrollbar from 'perfect-scrollbar'

  export default {
    
    data(){

        let data={


            show:true

        }
        
        return data;
    },
    props:["headerMenuId"],
    components:{
       siderItem,
       PerfectScrollbar
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
    max-width: 200px;
    background:#545c64;
    position: relative;
    overflow: hidden;
  }

  .siderbar-scrollbar{

    width: calc(100% + 20px);
    height: 100%;
    overflow: auto;
     
  }


  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>