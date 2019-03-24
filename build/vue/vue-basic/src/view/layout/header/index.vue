<template>
   
  <div style="width%;height:100%"> 
    <el-menu
      :default-active="activeId"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      
        <el-menu-item v-for="item in menuConfig" :index="item.id" :key="item.id">
          <template v-if="!item.href">
              {{item.title}}
          </template>
          <template v-else="item.href">
            <a :href="item.href" target="_blank">{{item.title}}</a>
          </template>
          
        </el-menu-item>



    </el-menu>    
  </div>
</template>


<script>

import headerConfig from "@/config/layout/headerConfig.js"
import siderConfig from "@/config/layout/siderConfig.js"

  
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
           
           if(siderConfig.some(item => item.firstMenuId == key)){
               
               let siderMenu = siderConfig.filter(item => item.firstMenuId == key)[0].siderMenu;

               this.$store.dispatch('setSiderMenu',{
                    siderMenu
               });

           }

      },
      renderMenu(){

          this.menuConfig = headerConfig.menu;
          this.activeId =  this.menuConfig[0].id;
          this.handleSelect(this.activeId);

      }
    
    },
    mounted(){

      this.renderMenu(); 
      
    }
  
  
  
  }

</script>

<style scoped>

   .el-menu-demo{

      height: 100%;
      border-bottom:none !important;
   }
   
   .el-menu-demo>li{

      height: 100%;
   }

</style>