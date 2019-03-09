<template>
   <div>

    <el-menu
        :default-active="rootMenuId"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
       <transition-group name="el-fade-in"> 
         <template v-if="show">
           <sider-item v-for="item in siderMenu" :key="item.id" :option="item"></sider-item> 
         </template>
       </transition-group>
    </el-menu>
         
   </div>
</template>


<script>

  import { mapActions } from 'vuex' 

  import  siderItem from './siderItem.vue'

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
      
      }
    },
    computed:{

        siderMenu(){
            
            return this.$store.state.menu.siderMenu;
            
        },
        rootMenuId(){

            return this.$store.state.menu.rootMenuId;
        }
    },
  }

</script>


<style>

  .el-menu {

     width: 100%;
     border: none;
  }



</style>