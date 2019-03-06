<template>
   
   
  <el-menu
    default-active="1001"
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

</template>


<script>

import headerConfig from "@/config/layout/headerConfig.js"

  
  export default {
    
    data() {
    
      return {
        
         menuConfig:{},



      };
    
    },
    components:{
     
    },
    methods: {
    
      handleSelect(key, keyPath) {

      
      },
      renderMenu(){

          this.menuConfig = headerConfig.menu;
          console.log(this.menuConfig);


      }
    
    },
    mounted(){

      this.renderMenu(); 
      
    }
  
  
  
  }

</script>

<style>

 

</style>