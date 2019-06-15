<template>
    <div>
       <template v-if="!option.children" >
         <router-link  :to="option.id" tag="span">  
            <el-menu-item :index="option.id">
                <template>
                    <i :class="option.icon" style="color:#fff;padding-right:10px;"/>
                    <span slot="title">{{option.title}}</span>
                </template>
            </el-menu-item>
         </router-link>
       </template>
       <template v-else>
           <el-submenu :index="option.id">
                <template slot="title">
                    <i :class="option.icon" style="color:#fff;padding-right:10px;"/>
                    <span slot="title">{{option.title}}</span>
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
        computed:{

            
            rootMenuId(){

                return this.$store.state.menu.rootMenuId;
            },
            
        },
        mounted(){

             
             this.$router.push("/"+ getSession("activeSiderMenuId"));

        }
       

    }


</script>


<style lang="less" scoped>

.router-link-active{

   &>li{
      
      &>i{
      
        color:#ffd04b;
   
      }
      &>span{
      
        color:#ffd04b;
   
      }

   }

}

.el-menu-item{

    &>i{

        color:#fff;
    }
    &>span{

        color:#fff;
    }
}

</style>
