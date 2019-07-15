<template>
    <div class="box-100 pad-20" >
         
        <el-divider content-position="left">布局颜色</el-divider>
        <el-row>
            <div class="col">
                <div class="name">头部颜色</div>
                <el-color-picker v-model="headerbgColor" show-alpha :predefine="['#545c64']" @change="setHeaderBgColor"></el-color-picker>
            </div>
            <div class="col">
                <div class="name">侧边栏颜色</div>
                <el-color-picker v-model="siderbgColor" show-alpha :predefine="['#545c64']" @change="setSiderBgColor"></el-color-picker>
            </div>
        </el-row>


    </div>
</template>



<script>

import { mapState } from "vuex";

export default {
    
    data(){

        let data = {

           headerbgColor:"#545c64",
           siderbgColor:"#545c64"

        }

        return data;
   
    },
    methods:{

        setHeaderBgColor(){

           this.$store.dispatch("setHeaderBgColor",this.headerbgColor);
 

        },  
        setSiderBgColor(){

           this.$store.dispatch("setSiderBgColor",this.siderbgColor);

        },
        setSiderbarDrag(){

             
            this.$store.dispatch("setSiderbarDrag",this.siderbarDrag);
 


        }

    },
    computed:{

        ...mapState({

            headerbgColor: state => state.config.headerbgColor,
            siderbgColor: state => state.config.siderbgColor,
            
        })


    }


}
</script>

<style lang="less" scoped>

    .el-row{

        padding-left: 40px;

        .col{

            position: relative;
            float: left;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center; 
            margin-right: 30px;
            .name{

                margin-right: 20px;
            }
        }
    }


</style>
