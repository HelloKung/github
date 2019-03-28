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

           this.ChartRender(); 

           this.timer = setInterval(()=>{
               
               
                this.chart.dispatchAction({
                    type: 'pieSelect',
                    // 可选，系列 index，可以是一个数组指定多个系列
                    seriesIndex: 0,
                    // 可选，系列名称，可以是一个数组指定多个系列
                    seriesName:"",
                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                    dataIndex: this.t,
                    // 可选，数据名称，在有 dataIndex 的时候忽略
                    name: ""
                });

                this.chart.dispatchAction({
                    type: 'pieUnSelect',
                    // 可选，系列 index，可以是一个数组指定多个系列
                    seriesIndex: 0,
                    // 可选，系列名称，可以是一个数组指定多个系列
                    seriesName:"",
                    // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
                    dataIndex: this.t - 1 < 0 ? 4 : this.t - 1,
                    // 可选，数据名称，在有 dataIndex 的时候忽略
                    name: ""
                });


                this.t = (this.t + 1)%5;

               

           },3000)


        },
        ChartRender(){

            let  option = {
             
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show:false
                            },
                            labelLine: {
                                
                                show: false
                                
                            },
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ]
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
