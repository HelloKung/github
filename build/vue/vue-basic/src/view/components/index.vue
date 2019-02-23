<template>
    
<div style="padding:10px 20px;">
  <el-row :gutter="20">
      <el-col :lg="12">
       <div>
         <el-m-title1 :title1data="title1data"  @selectchange="getSelectOption"></el-m-title1>
       </div>
       <div style="height:200px;">
          <el-m-linechart1 :chartOption="chartOption" ref="linechart1fun"></el-m-linechart1>
       </div> 
      </el-col>
  </el-row>

  <el-button @click="bb" size="mini">go</el-button>
      <datepickerweek  @formatvalue="formatweek"></datepickerweek>{{week}}
  <el-button type="primary" size="mini">周</el-button>
</div>
</template>



<script>

import title1 from '@/view/components/title1.vue'
import linechart1 from '@/view/components/linechart1.vue'
import datepickerweek from './datepickerweek'

export default {
    data(){
     
        let data = {
 
             title1data:{
                 title:"巡检任务覆盖量",
                 options: [{
                      id:1,
                      value:"",
                      placeholder:"PTN",
                      data:[{
                          value: '选项1',
                          label: '黄金糕'
                          }, {
                          value: '选项2',
                          label: '双皮奶'
                          }, {
                          value: '选项3',
                          label: '蚵仔煎'
                          }, {
                          value: '选项4',
                          label: '龙须面'
                          }, {
                          value: '选项5',
                          label: '北京烤鸭'
                      }]
                },{
                      id:2,
                      value:"",
                      placeholder:"全省",
                      data:[{
                          value: '选项1',
                          label: '黄金糕'
                          }, {
                          value: '选项2',
                          label: '双皮奶'
                          }, {
                          value: '选项3',
                          label: '蚵仔煎'
                          }]

                }
                ],


            },
            chartOption:{

                 id:"chart1",  
                 chartData:{
                    xAxis_data:['长沙市','株洲市','湘潭市','衡阳市','邵阳市'],
                    series_data:[68.6, 50 ,45.7,40,38.4]
                 },

            },
            weekvalue:"123",
            week:[], 
            week_option:{

                width:150,
                size:"small",
                format:"yyyy 第 WW 周"
            }



        }

        return data;
    },
    components:{

          'el-m-title1': title1,
          'el-m-linechart1': linechart1,
          'datepickerweek':datepickerweek
    },
    methods:{

        getSelectOption(data){
    
              console.log("选择框:",data.options.map(params=>params.value).join(","));
              this.chartOption.chartData.series_data=[123,23,55,78,99];
              //console.log(this.chartOption..series_data);
              this.$refs.linechart1fun.refreshData();
        },
        bb(){
 
        },
        formatweek(val){
             
             this.week = val;

        }

    }



}







</script>