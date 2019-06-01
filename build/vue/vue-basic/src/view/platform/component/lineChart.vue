<template>
    <div class="container pad-20 box-100">
        <div class="title">在线人数</div>
        <div class="chart" ref="chart"></div>    
    </div>
</template>


<script>

import echarts from "echarts";


export default {

    data(){

        let data = {

            chart:null


        }

        return data;
    },
    methods:{

        renderChart(){

            let option = {

                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top:'8%',
                    left: 10,
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'bar',
                        barWidth: 30,
                        data:[10, 52, 200, 334, 390, 330, 220]
                    }
                ]


            }

            this.chart.setOption(option);

        }


    },
    mounted(){


        this.chart = echarts.init(this.$refs["chart"]);  
  

        this.renderChart();

    },
    beforeDestroy() {
       
        if (!this.chart) {
        return
        }
        this.chart.setOption({});
        this.chart.dispose()
        this.chart = null
    },

    
}
</script>


<style lang="less" scoped>

   .container{

       height: 300px;
       background: #fff;
       border-radius:3px;
       box-shadow:1px 1px 10px #ccc;
       padding: 5px 15px;
       .title{

           padding: 5px;
           height:36px;
           width: 100%;
       }
       .chart{
           width: 100%;
           height:calc(100% - 36px)
       }

   }



</style>
