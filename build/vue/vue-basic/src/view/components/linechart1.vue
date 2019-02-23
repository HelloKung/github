<template> 
   <div :id="chartOption.id" style="width:100%;height:100%;"></div>
</template>



<script>
    
    import echarts from 'echarts'

    export default{

        data(){

            let data = {
               
               
               chart:null,
               
               
            }

            return data;
        },
        props:["chartOption"],
        methods:{

            initChart(){



             let option = {
 
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top:'5%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.chartOption.chartData.xAxis_data,
                        axisTick: {
                            show :false
                        },
                        axisLabel: {

                        interval:0
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        //max : 20000,
                        //min : 0 ,
                        // splitLine:{
                        //   show : false
                        // },
                        // axisTick: {
                        //   show : false
                        // }
                    }
                ],
                series : [
                    {
                        name:'各隐患类别下的隐患数量',
                        type:'bar',
                        barWidth: '30%',
                        itemStyle:{

                        color:"#5498ff"
                        },
                        data:this.chartOption.chartData.series_data
                    }
                ]

            }     
            
               this.chart.setOption(option);

               
 


            },
            refreshData(){


                 let option = this.chart.getOption();
                 
                 option.xAxis[0].data = this.chartOption.chartData.xAxis_data;
                 option.series[0].data = this.chartOption.chartData.series_data;
                 
                 this.chart.clear();
                 this.chart.setOption(option);
            }
        },
        mounted(){

            this.chart = echarts.init(document.getElementById(this.chartOption.id));
            
            this.initChart();

            window.addEventListener("resize",()=>{this.chartOption.chart.resize()})

        }


        
    }



</script>