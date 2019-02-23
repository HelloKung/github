<template>
   <div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title" >分组一</template>
          <el-menu-item index="1-1">
              <router-link to="/table1" tag="div">表格1</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link to="/table2" tag="div">表格2</router-link>
          </el-menu-item>
          <el-menu-item index="1-2-1">
              <router-link to="/ElementTable" tag="div">表格封装</router-link>
          </el-menu-item>
          <el-menu-item index="1-2-2">
              <router-link to="/RenderDom" tag="div">虚拟DOM</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">
              <router-link to="/practice1" tag="div">练习1</router-link>
          </el-menu-item>
        </el-menu-item-group>


        
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">
               <router-link to="/components" tag="div">components</router-link>
          </el-menu-item>
          <el-menu-item index="1-5">
              <router-link to="/graph" tag="div">graph</router-link>
          </el-menu-item>
          <el-menu-item index="1-6">
              <router-link to="/screen1" tag="div">demo1</router-link>
          </el-menu-item>
          <el-menu-item index="1-7">
              <router-link to="/vuex1" tag="div">vuex1</router-link>
          </el-menu-item>
          <el-menu-item index="1-7">
              <router-link to="/table3" tag="div">表格组件</router-link>
          </el-menu-item>
        </el-submenu>

        <el-menu-item-group title="分组3">
          <el-menu-item index="1-5">
              <router-link to="/test" tag="div">test</router-link>
          </el-menu-item>
        </el-menu-item-group>  


      </el-submenu>


      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
              <router-link to="/timelinemap" tag="div">地图</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
              <router-link to="/node1" tag="div">node相关</router-link>
          </el-menu-item>
        </el-menu-item-group>     
        <!-- <el-menu-item index="1-5">
          <router-link to="/test3" tag="div">test</router-link>
        </el-menu-item>    -->
      
      </el-submenu>  
      
      
      
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

   </div>
</template>


<script>

  export default {
    
    data(){

        let data={




        }
        
        return data;
    },
    props:["headerMenuId"],
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
    }
  }

</script>


<style>

  .el-menu {

     width: 100%;
     border: none;
  }



</style>