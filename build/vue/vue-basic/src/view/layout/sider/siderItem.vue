<template>
    <div>
       <template v-if="!option.children" >
         <router-link  :to="option.id" tag="span">  
            <el-menu-item :index="option.id">
                <template slot="title">
                    <i :class="option.icon" style="color:#fff;padding-right:10px;"></i>
                    <span>{{option.title}}</span>
                </template>
            </el-menu-item>
         </router-link>
       </template>
       <template v-else>
           <el-submenu :index="option.id">
                <template slot="title">
                    <i :class="option.icon" style="color:#fff;padding-right:10px;"></i>
                    <span>{{option.title}}</span>
                </template>
                <sider-item v-for="item in option.children" :key="item.id" :option="item"></sider-item>
           </el-submenu>
       </template>

    </div>
</template>


<script>

    import {getSession}  from "@/utils/session"

    export default {

         name:"siderItem",
         data(){

             let data = {
              
                  

             }

             return data;
         },
         props:["option"],
         methods:{


         },
         
         mounted(){

             this.$router.push("/"+ this.$store.state.menu.rootMenuId);

         }
       

    }


</script>


