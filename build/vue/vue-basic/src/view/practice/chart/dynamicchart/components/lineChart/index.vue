<template>
    <div class="box-100">
       <div class="box-100" ref="chart"></div>
    </div>
</template>


<script>

import echarts from "echarts";
import moment from "moment";

export default {

    name:"lineChart",
    data(){

        let data = {

            chart:null,
            chartData:[],
            list:[],
            t:0,
            timer:null
        };

        return data;
    },
    methods:{

        init(){

           
           this.timer = setInterval(()=>{

              this.list = Array.from({length:5},(v,k) => 0).map((item,index) => {

                 return moment().subtract(this.t + index,"days").format("YYYY-MM-DD")

              });

              this.chartData = this.list.map(item => parseInt(Math.random()*899+100));

              this.ChartRender();

              this.t++; 

           },3000)


        },
        ChartRender(){

            let  option = {
             
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.list,
                            axisLabel:{
                                interval:0
                            }
                             
                        }
                    ],
                    yAxis : [{
                        
                        type : 'value',
                        max:1200,
                        splitLine:{
                            show:false
                        }
                        
                    }],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            label:{
                                show:true,
                                //position:"middle"
                            },
                            itemStyle:{
                                color:"#3398DB"
                            },
                            data: this.chartData 
                        }
                    ]
                };



             

             this.chart.setOption(option);

        } 




    },
    beforeDestroy() {
        clearInterval(this.timer);
        this.t=0;
        if (!this.chart) {
        return
        }
        this.chart.setOption({});
        this.chart.dispose()
        this.chart = null
    },
    mounted(){

         this.chart = echarts.init(this.$refs["chart"]);

         this.init();

    }
    
}
</script>
