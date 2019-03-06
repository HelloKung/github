<template>
    <span  role="menuitem" class="el-menu-item" style="color: rgb(255, 208, 75); background-color: rgb(84, 92, 100); padding:0px;">
       <template v-if="!option.children">
          <el-menu-item v-if="!option.href" :index="option.id">{{option.title}}</el-menu-item>
          <el-menu-item v-else :index="option.id">
            <a :href="option.href" target="_blank">{{option.title}}</a>
          </el-menu-item>  
       </template>
       <template v-else>
           <el-submenu :index="option.id">
               <template slot="title">{{option.title}}</template>
               <header-item v-for="item in option.children" :option="item" :key="item.id"></header-item>
           </el-submenu>
       </template>    
      
     </span>
</template>


<script>
export default {
    name:"headerItem",
    data(){

        let data = {


        }

        return data;
    },
    props:{
        option:{}
    },
    methods:{



    },
    mounted(){



        
    }


}
</script>


<style>



</style>
