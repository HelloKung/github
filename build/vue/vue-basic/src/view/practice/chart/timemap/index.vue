<template>
   <div style="width:100%;height:100%; padding:20px;">
     <div v-if="show" style="width:100%; height:100%;" ref="map"></div>
   </div>
</template>







<script>

import echarts from 'echarts';
import moment from 'moment';
import "echarts/map/js/china.js";

export default {

    data(){

       let  data = {


           map:null,
           show:true    
       }



       return  data;
    },
    methods:{

       MapRender(){

  
         let   option = {
                
                baseOption: {
                    
                    timeline: {
                        data: [
                             moment().subtract(1,"year").format("YYYY-MM-DD"), 
                             moment().format("YYYY-MM-DD"), 
                             moment().add(1,"year").format("YYYY-MM-DD")
                        ],
                        autoPlay:true,
                        axisType: 'category',
                        playInterval:3000,
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

                        data:[{"name":"海门","value":[121.15, 31.89, 9]},{ "name": "海门", "value": [ 121.15, 31.89, 9 ] }, { "name": "鄂尔多斯", "value": [ 109.781327, 39.608266, 12 ] }, { "name": "招远", "value": [ 120.38, 37.35, 12 ] }, { "name": "舟山", "value": [ 122.207216, 29.985295, 12 ] }, { "name": "齐齐哈尔", "value": [ 123.97, 47.33, 14 ] }, { "name": "盐城", "value": [ 120.13, 33.38, 15 ] }, { "name": "赤峰", "value": [ 118.87, 42.28, 16 ] }, { "name": "青岛", "value": [ 120.33, 36.07, 18 ] }, { "name": "乳山", "value": [ 121.52, 36.89, 18 ] }, { "name": "金昌", "value": [ 102.188043, 38.520089, 19 ] }, { "name": "泉州", "value": [ 118.58, 24.93, 21 ] }, { "name": "莱西", "value": [ 120.53, 36.86, 21 ] }, { "name": "日照", "value": [ 119.46, 35.42, 21 ] }, { "name": "胶南", "value": [ 119.97, 35.88, 22 ] }, { "name": "南通", "value": [ 121.05, 32.08, 23 ] }, { "name": "拉萨", "value": [ 91.11, 29.97, 24 ] }, { "name": "云浮", "value": [ 112.02, 22.93, 24 ] }, { "name": "梅州", "value": [ 116.1, 24.55, 25 ] }, { "name": "文登", "value": [ 122.05, 37.2, 25 ] }, { "name": "上海", "value": [ 121.48, 31.22, 25 ] }, { "name": "攀枝花", "value": [ 101.718637, 26.582347, 25 ] }, { "name": "威海", "value": [ 122.1, 37.5, 25 ] }, { "name": "承德", "value": [ 117.93, 40.97, 25 ] }, { "name": "厦门", "value": [ 118.1, 24.46, 26 ] }, { "name": "汕尾", "value": [ 115.375279, 22.786211, 26 ] }, { "name": "潮州", "value": [ 116.63, 23.68, 26 ] }, { "name": "丹东", "value": [ 124.37, 40.13, 27 ] }, { "name": "太仓", "value": [ 121.1, 31.45, 27 ] }, { "name": "曲靖", "value": [ 103.79, 25.51, 27 ] }, { "name": "烟台", "value": [ 121.39, 37.52, 28 ] }, { "name": "福州", "value": [ 119.3, 26.08, 29 ] }, { "name": "瓦房店", "value": [ 121.979603, 39.627114, 30 ] }, { "name": "即墨", "value": [ 120.45, 36.38, 30 ] }, { "name": "抚顺", "value": [ 123.97, 41.97, 31 ] }, { "name": "玉溪", "value": [ 102.52, 24.35, 31 ] }],
                        itemStyle:{

                            color:"#fcaf41"
                        },
                        symbolSize(data){

                            return data[2]/2;
                        }
                     }] 

                },{


                     series: [{

                        data:[{"name":"唐山","value":[118.02, 39.63, 119]}, { "name": "重庆", "value": [ 106.54, 29.59, 66 ] }, { "name": "台州", "value": [ 121.420757, 28.656386, 67 ] }, { "name": "南京", "value": [ 118.78, 32.04, 67 ] }, { "name": "滨州", "value": [ 118.03, 37.36, 70 ] }, { "name": "贵阳", "value": [ 106.71, 26.57, 71 ] }, { "name": "无锡", "value": [ 120.29, 31.59, 71 ] }, { "name": "本溪", "value": [ 123.73, 41.3, 71 ] }, { "name": "克拉玛依", "value": [ 84.77, 45.59, 72 ] }, { "name": "渭南", "value": [ 109.5, 34.52, 72 ] }, { "name": "马鞍山", "value": [ 118.48, 31.56, 72 ] }, { "name": "宝鸡", "value": [ 107.15, 34.38, 72 ] }, { "name": "焦作", "value": [ 113.21, 35.24, 75 ] }, { "name": "句容", "value": [ 119.16, 31.95, 75 ] }, { "name": "北京", "value": [ 116.46, 39.92, 79 ] }, { "name": "徐州", "value": [ 117.2, 34.26, 79 ] }, { "name": "衡水", "value": [ 115.72, 37.72, 80 ] }, { "name": "包头", "value": [ 110, 40.58, 80 ] }, { "name": "绵阳", "value": [ 104.73, 31.48, 80 ] }, { "name": "乌鲁木齐", "value": [ 87.68, 43.77, 84 ] }, { "name": "枣庄", "value": [ 117.57, 34.86, 84 ] }, { "name": "杭州", "value": [ 120.19, 30.26, 84 ] }, { "name": "淄博", "value": [ 118.05, 36.78, 85 ] }, { "name": "鞍山", "value": [ 122.85, 41.12, 86 ] }, { "name": "溧阳", "value": [ 119.48, 31.43, 86 ] }, { "name": "库尔勒", "value": [ 86.06, 41.68, 86 ] }, { "name": "安阳", "value": [ 114.35, 36.1, 90 ] }, { "name": "开封", "value": [ 114.35, 34.79, 90 ] }, { "name": "济南", "value": [ 117, 36.65, 92 ] }, { "name": "德阳", "value": [ 104.37, 31.13, 93 ] }, { "name": "温州", "value": [ 120.65, 28.01, 95 ] }, { "name": "九江", "value": [ 115.97, 29.71, 96 ] }, { "name": "邯郸", "value": [ 114.47, 36.6, 98 ] }, { "name": "临安", "value": [ 119.72, 30.23, 99 ] }, { "name": "兰州", "value": [ 103.73, 36.03, 99 ] }, { "name": "沧州", "value": [ 116.83, 38.33, 100 ] }],
                        itemStyle:{

                            color:"#11ea1a"
                        },
                        symbolSize(data){

                            return data[2]/5;
                        }
                     }] 

                },{


                     series: [{

                        data:[{"name": "葫芦岛","value":[120.836932, 40.711052, 35]},{ "name": "南充", "value": [ 106.110698, 30.837793, 104 ] }, { "name": "天津", "value": [ 117.2, 39.13, 105 ] }, { "name": "富阳", "value": [ 119.95, 30.07, 106 ] }, { "name": "泰安", "value": [ 117.13, 36.18, 112 ] }, { "name": "诸暨", "value": [ 120.23, 29.71, 112 ] }, { "name": "郑州", "value": [ 113.65, 34.76, 113 ] }, { "name": "哈尔滨", "value": [ 126.63, 45.75, 114 ] }, { "name": "聊城", "value": [ 115.97, 36.45, 116 ] }, { "name": "芜湖", "value": [ 118.38, 31.33, 117 ] }, { "name": "唐山", "value": [ 118.02, 39.63, 119 ] }, { "name": "平顶山", "value": [ 113.29, 33.75, 119 ] }, { "name": "邢台", "value": [ 114.48, 37.05, 119 ] }, { "name": "德州", "value": [ 116.29, 37.45, 120 ] }, { "name": "济宁", "value": [ 116.59, 35.38, 120 ] }, { "name": "荆州", "value": [ 112.239741, 30.335165, 127 ] }, { "name": "宜昌", "value": [ 111.3, 30.7, 130 ] }, { "name": "义乌", "value": [ 120.06, 29.32, 132 ] }, { "name": "丽水", "value": [ 119.92, 28.45, 133 ] }, { "name": "洛阳", "value": [ 112.44, 34.7, 134 ] }, { "name": "秦皇岛", "value": [ 119.57, 39.95, 136 ] }, { "name": "株洲", "value": [ 113.16, 27.83, 143 ] }, { "name": "石家庄", "value": [ 114.48, 38.03, 147 ] }, { "name": "莱芜", "value": [ 117.67, 36.19, 148 ] }, { "name": "常德", "value": [ 111.69, 29.05, 152 ] }, { "name": "保定", "value": [ 115.48, 38.85, 153 ] }, { "name": "湘潭", "value": [ 112.91, 27.87, 154 ] }, { "name": "金华", "value": [ 119.64, 29.12, 157 ] }, { "name": "岳阳", "value": [ 113.09, 29.37, 169 ] }, { "name": "长沙", "value": [ 113, 28.21, 175 ] }, { "name": "衢州", "value": [ 118.88, 28.97, 177 ] }, { "name": "廊坊", "value": [ 116.7, 39.53, 193 ] }, { "name": "菏泽", "value": [ 115.480656, 35.23375, 194 ] }, { "name": "合肥", "value": [ 117.27, 31.86, 229 ] }, { "name": "武汉", "value": [ 114.31, 30.52, 273 ] }, { "name": "大庆", "value": [ 125.03, 46.58, 279 ] } ],
                        itemStyle:{

                            color:"#00bcd4"
                        },
                        symbolSize(data){

                            return Math.sqrt(data[2]);
                        }
                     }] 

                }]
            }


          this.map.setOption(option);

       },
       

    },
    beforeDestroy() {
        this.show = false;
        if (!this.map) {
        return
        }
        this.map.setOption({});
        this.map.dispose()
        this.map = null
    },
    mounted(){

       this.map = echarts.init(this.$refs["map"]);

       this.MapRender();

    }


    
}
</script>
