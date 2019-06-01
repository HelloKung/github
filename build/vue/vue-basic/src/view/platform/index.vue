<template>
    <div class="container pad-20 ">
        
        <el-row class="brief-group" style="margin-bottom:20px;"  :gutter="20">
            <el-col :span="6">
                <brief-introduction :title="'企业数'" :count="8"   unit="个"  :percent="46" :icon="'icon-office'" :background="['rgba(255, 88, 88, 0.9)','rgba(240, 152, 25, 0.9)']"/>
            </el-col>
            <el-col :span="6">
                <brief-introduction :title="'公司数'" :count="356" unit="个"  :percent="88" :icon="'icon-home'" :background="['rgba(68, 129, 235, 0.9), rgba(4, 190, 254, 0.9)']"/>
            </el-col>
            <el-col :span="6">
                <brief-introduction :title="'人员数'" :count="10214" unit="人"  :percent="23" :icon="'icon-mug'" :background="['rgba(80, 204, 127, 0.9), rgba(245, 209, 0, 0.9)']"/>
            </el-col>
            <el-col :span="6">
                <brief-introduction :title="'销售额'" :count="25476" unit="万元"  :percent="67" :icon="'icon-stackoverflow'" :background="['#6a008a, #82167e']"/>
            </el-col>
        </el-row>   

        <el-row class="chart-group"  style="margin-bottom:20px;"  :gutter="20">
            <el-col :span="16">
                <line-chart/>
            </el-col>
            <el-col :span="8">
                <pie-chart/> 
            </el-col>
        </el-row>   

        <el-row class="photo-group"  style="margin-bottom:20px;"  :gutter="20">
            <el-col :span="24">
                <photo-wall/>
            </el-col>
        </el-row>     
    </div>
</template>


<script>


import BriefIntroduction from "@/components/BriefIntroduction"
import lineChart from "./component/lineChart"
import pieChart from "./component/pieChart"
import photoWall from "./component/photoWall"



export default {

    data(){

        let data = {



        } 
         
        return data;

    },
    components:{

        BriefIntroduction,
        lineChart,
        pieChart,
        photoWall
    }
    
}
</script>



<style lang="less" scoped>

   .container{

        background-color:#EEF5F9;
        width:100%;
        .brief-group{
            
            .el-col{

                height:160px; 

            }
            
    
        }
      
   }
</style>

