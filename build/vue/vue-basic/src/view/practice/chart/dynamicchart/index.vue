
<template>
    <div class="box-100">
        <el-row >
            <div class="warpper">
                <line-chart/>
            </div>
            <div class="warpper">
                <pie-chart/>
            </div>
            <div class="warpper"></div>
            <div class="warpper"></div>
        </el-row>

        
    </div>
</template>



<script>

import lineChart from './components/lineChart';
import pieChart from './components/pieChart';


export default {
    
    data(){

        let data = {};

        return data;

    },
    components:{
        lineChart,
        pieChart
    }



}
</script>

<style>

.warpper{

   width:calc(50% - 30px);
   height:calc(50% - 30px);
   margin-left: 20px;
   margin-top: 20px;
   /* border: 1px solid #000;  */
   float: left;

}

</style>

