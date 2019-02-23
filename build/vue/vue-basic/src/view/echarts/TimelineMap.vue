<template>
    <div style="width:100%; height:100%;" ref="map">

    </div>
</template>







<script>

import echarts from 'echarts';

import "echarts/map/js/china.js";

export default {

    data(){

       let  data = {


           map:null

       }



       return  data;
    },
    methods:{

       MapRender(){

  
         let   option = {
                
                baseOption: {
                    
                    timeline: {
                        data: ['2002-01-01', '2003-01-01', '2004-01-01'],
                        autoPlay:true,
                        axisType: 'category',
                        playInterval:2000,
                        label:{
                            color:"#fff",
                            formatter : function(s) {
                                return (new Date(s)).getFullYear();
                            }
                        },
                        controlStyle:{
                            color:"#fff",
                            borderColor:"#fff"
                        },
                        lineStyle:{
                            color:"#fff"
                        }
                    },
                    backgroundColor: '#404a59',
                    title: {
                        text: '时间轴地图',
                        x:'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip:{
                        
                    },
                    geo: {
                        map: 'china',
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#323c48',
                                borderColor: '#111'
                            },
                            emphasis: {
                                areaColor: '#2a333d'
                            }
                        }
                        
                    },
                    series:[{

                            name:"人口分布情况",
                            type:"scatter",
                            coordinateSystem: 'geo',
                        
                    }]

                },
                options:[{


                     series: [{

                        data:[{name:"海门",value:[121.15, 31.89, 9]}]

                     }] 

                },{


                     series: [{

                        data:[{name:"唐山",value:[118.02, 39.63, 119]}]

                     }] 

                },{


                     series: [{

                        data:[{name: "葫芦岛",value:[120.836932, 40.711052, 35]}]

                     }] 

                }]
            }


          this.map.setOption(option);

       }

    },
    mounted(){

       this.map = echarts.init(this.$refs["map"]);

       this.MapRender();

    }


    
}
</script>
