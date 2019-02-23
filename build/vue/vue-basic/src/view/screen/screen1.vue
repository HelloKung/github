<template>
  <div class="dashboard-editor-container">

  <transition name="tip" >
    <el-row :gutter="20" v-show="tip_show">
      <el-col :xs="24" :sm="24" :lg="24">
       <div class="wrapper tip"  >
          <div class="title" >注:以下指标展示均为本日全胜数据如需观看细节请进入对应页面</div>
          <div class="close" >
             <i class ="el-icon-close" @click="tip_show=!tip_show"></i>
          </div>
       </div>
      </el-col> 
    </el-row>
  </transition>

   <el-row :gutter="20" >
     <el-col :xs="24" :sm="24" :lg="24">
        <div class="wrapper inspection-task">
          <div class = "title">
             <div class="title-icon" ></div>
             <div class="title-text" >巡检任务覆盖量</div>
             <div class="title-select">
               <el-select v-model="value" placeholder="PTN" size = "mini" style="width:100px; margin-top:-4px ;margin-right:10px"> 
                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
               </el-select>
               <el-select v-model="value" placeholder="全省" size = "mini" style="width:100px; margin-top:-4px "> 
                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
               </el-select>
             </div>
          </div>
        <div class="section">
           <div class="section-box" v-for="item in inspection_task_section">
              <div class="section-icon" ></div>
              <div class="section-text" >{{item.name}}</div>
              <div class="section-num"  >{{item.value}}</div>
              <div class="section-unit" >个</div>
           </div>
           
        </div>
        </div>
     </el-col>
   </el-row>




    <el-row :gutter="20" >
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="wrapper plate1">
           <div class="plate1-title">预割接工单量</div>
           <div class="plate1-label">
              <div class="plate1-left-label" >预割接</div>
              <div class="plate1-center-label" style="color:#8693f3">160 / 60</div>
              <div class="plate1-right-label" >已割接</div>
           </div>
        </div>

        <div class="wrapper plate1" style="margin-top:20px;">
           <div class="plate1-title">入网审核工单量</div>
           <div class="plate1-label">
              <div class="plate1-left-label" >已通过</div>
              <div class="plate1-center-label" style="color:#5498ff" >160 / 60</div>
              <div class="plate1-right-label" >不通过</div>
           </div>
        </div>
        
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <div class="wrapper     ">
           <div class="plate1-title">割接工单工作量</div>
           <div class="plate1-label">
              <div class="plate1-left-label" >成功量</div>
              <div class="plate1-center-label" style="color:#bc8dee">160 / 60</div>
              <div class="plate1-right-label" >失败量</div>
           </div>
        </div>

        <div class="wrapper plate1" style="margin-top:20px;">
           <div class="plate1-title">入网竣工审核工单量功量</div>
           <div class="plate1-label">
              <div class="plate1-left-label" >已通过</div>
              <div class="plate1-center-label" style="color:#21de9e" >160 / 60</div>
              <div class="plate1-right-label" >不通过</div>
           </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12">
        <div class="wrapper inspection-task" style="height:350px">
          <div class = "title">
            <div class="title-icon" ></div>
            <div class="title-text" >各类型隐患占比</div>
          </div>
          <div id="chart1" class="section" style="height:280px;"></div>
         </div>
      </el-col>
    </el-row>
   
    
    <el-row :gutter="20" >
      <el-col :xs="24" :sm="24" :lg="16">
         <div class="wrapper inspection-task" style="height:310px">
            <div class = "title">
              <div class="title-icon" ></div>
              <div class="title-text" >各隐患类别下的隐患数量</div>
            </div>
            <div id="chart2" class="section" style="height:240px;"></div>
         </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
         <div class="wrapper plate2" v-for="item in plate2">
           <div class="plate2-title">{{item.name}}</div>
           <div class="plate2-num">{{item.value}}</div>
         </div>
      </el-col>
    </el-row>


    <el-row :gutter="20" >
      <el-col :xs="24" :sm="24" :lg="8">
         <div class="wrapper inspection-task" style="height:310px">
            <div class = "title">
              <div class="title-icon" ></div>
              <div class="title-text" >宽带利用率排名</div>
            </div>
            <div id="chart3" class="section" style="height:240px;"></div>
         </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16">
         <div class="wrapper inspection-task" style="height:310px">
           <div class = "title">
              <div class="title-icon" ></div>
              <div class="title-text" >各级别隐患工单量</div>
            </div>
            <div id="chart4" class="section" style="height:240px;"></div>
         </div>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" >
      <el-col :xs="24" :sm="24" :lg="24">
         <div class="wrapper inspection-task" style="height:310px">
            <div class = "title">
              <div class="title-icon" ></div>
              <div class="title-text" >各地市隐患工单量</div>
              <div class="title-select">
               <el-select v-model="value" placeholder="流量隐患" size = "mini" style="width:100px; margin-top:-4px ;"> 
                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
               </el-select>
             </div>
            </div>
            <div id="chart5" class="section" style="height:240px;"></div>
         </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import echarts from 'echarts'

export default {

  data() {
    return {
       
        tip_show:true,
        value:"",
        options: [{
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
        }],
        inspection_task_section:[{
          name:"核心光路中断告警光路",
          value:120,
        },{
          name:"光功率异常NNI端口",
          value:120,
        },{
          name:"环网峰值带宽利用率超60%环网",
          value:120,
        },{
          name:"汇聚光路中断告警光路",
          value:120,
        },{
          name:"误码/丢包异常NNI端口",
          value:120,
        },{
          name:"温度异常单板",
          value:120,
        },{
          name:"接入光路中断告警光路",
          value:120,
        },{
          name:"误码/丢包异常UNI端口",
          value:120,
        },{
          name:"CPU使用率超80%单板",
          value:120,
        },{
          name:"光功率异常UNI端口",
          value:120,
        },{
          name:"环网峰值带宽利用率超40%环网",
          value:120,
        },
        ],
        plate2:[{
            name:"业务开通工单数量",
            value:"1431"
          },{
            name:"处理中工单数量",
            value:"130"
          },{
            name:"已归档工单数量",
            value:"87"
          }, 
        ],
        chart1:null,
        chart2:null,
        chart3:null,
        chart4:null,
        chart5:null,
        chart1Data:{
            series_data:[
              {value:60, name:'业务隐患'},
              {value:60, name:'端口隐患'},
              {value:30, name:'环网隐患'},
              {value:30, name:'二级链路隐患'}
            ]
        },
        chart2Data:{
            xAxis_data:['管线', '传输配套', '设备及网管', '组网安全', '性能', '数据配置', '机房及动力','其他'],
            series_data:[18000, 14000, 15000, 13000, 13000, 8000, 9000,12500]
        },
        chart3Data:{
            yAxis_data:['长沙市','株洲市','湘潭市','衡阳市','邵阳市'],
            series_data:[68.6, 50 ,45.7,40,38.4]
        },
        chart4Data:{
            data:[14578,578,578]
        },
        chart5Data:{
            xAxis_data:['长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市','张家界市','益阳市','娄底市','郴州市','永州市','怀化市'],
            series_data:[18000, 14000, 15000, 13000, 13000, 8000, 9000,12500, 13000, 13000, 8000, 9000,12500]
        }
       
    }
  },
  methods:{
     
     Chart1Render(){
        
         let option = {
 
            tooltip: {
            
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'各类型隐患占比',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        color: "#999",
                        fontSize: 15
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle:{
                       
                        color:"#95f0cf",
                        borderColor:"#fff",
                        borderWidth:5
                    },
                    data:this.chart1Data.series_data
                }
            ]

         }     
         
         
         this.chart1.setOption(option);

     },
     Chart2Render(){
        
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
                    data : this.chart2Data.xAxis_data,
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
                    max : 20000,
                    min : 0 ,
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
                    data:this.chart2Data.series_data
                }
            ]

         }     
         
         this.chart2.setOption(option);

     },
     Chart3Render(){
      
        let option = {

              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              grid: {
                  left: '3%',
                  right: '14%',
                  bottom: '3%',
                  top:'2%',
                  containLabel: true
              },
              xAxis: {
                  type: 'value',
                  boundaryGap: [0, 0],
                  axisTick:{
                     show:false
                  },
                  axisLine:{
                     show:false
                  },
                  axisLabel:{
                     show:false
                  },
                  splitLine:{
                     show:false
                  }
              },
              tooltip:{
                show:false
              },
              yAxis: {
                  type: 'category',
                  data: this.chart3Data.yAxis_data,
                  inverse: true,
                  axisTick:{
                     show:false
                  },
                  axisLine:{
                     show:false
                  }
              },
              series: [
                  {
                      barWidth:'35%',
                      type: 'bar',
                      itemStyle:{
                        color:"#5498ff",
                        barBorderRadius:20,
                        borderWidth:1.3,
                        borderColor:"rgba(153,194,255,0.6)",
                        shadowBlur:8.7,
                        shadowColor:"rgba(153,194,255,0.6)",
                        
                      },
                      data: this.chart3Data.series_data,
                      z:1
                  },
                  {
                      
                      barWidth:'35%',
                      type: 'bar',
                      barGap: '-100%',
                      itemStyle:{
                        color:"#a9cbff",
                        barBorderRadius:20
                      },
                      label:{
                        show:true,
                        position:'right',
                        formatter:(params)=>{

                          return this.chart3Data.series_data[params.dataIndex]+" %";
                        }
                      },
                      data: [100, 100, 100 ,100 ,100],
                      z:0,
                  }
              ]

        }
             this.chart3.setOption(option);

     },
     Chart4Render(){
   
        let option = {
            
            title:[{
               
               text:this.chart4Data.data[0]+"个",
               x:"10%",
               y:"bottom",
               textStyle:{
                  color:"#2ad19e",
                  fontWeight:400
               }
            },{
               
               text:this.chart4Data.data[1]+"个",
               x:"45%",
               y:"bottom",
               textStyle:{
                  color:"#4dabfd",
                  fontWeight:400
               }
            },{
               
               text:this.chart4Data.data[2]+"个",
               x:"80%",
               y:"bottom",
               textStyle:{
                  color:"#e40077",
                  fontWeight:400
               }
            },
            ],
            tooltip: {
                show:false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'一般隐患',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center: ['15%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        color: "#999",
                        fontSize: 15,
                    },
                    labelLine: {
                        show: false,
                    },
                    data:[
                        {value:75, name:'一般隐患',itemStyle:{color:"#95f0cf",shadowColor:"#95f0cf",borderWidth:1,shadowBlur:5},label:{position:"center",color:"#2ad19e"}},
                        {value:25, name:'aa',itemStyle:{color:"#e5faf3"},label:{show:false},emphasis:{itemStyle:{color:"#e5faf3"}}},
                    ],
                    hoverAnimation: false,
                },
                {
                    name:'重要隐患',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        color: "#999",
                        fontSize: 15,
                    },
                    labelLine: {
                        show: false,
                    },
                    data:[
                        {value:15, name:'重要隐患',itemStyle:{color:"#88c7ff",shadowColor:"#88c7ff",borderWidth:1,shadowBlur:5},label:{position:"center",color:"#4dabfd"}},
                        {value:85, name:'bb',itemStyle:{color:"#e9f5ff"},label:{show:false},emphasis:{itemStyle:{color:"#e9f5ff"}}},
                    ],
                    hoverAnimation: false,
                    
                },
                {
                    name:'严重隐患',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center: ['85%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        color: "#999",
                        fontSize: 15,
                    },
                    labelLine: {
                        show: false,
                    },
                    data:[
                        {value:15, name:'严重隐患',itemStyle:{color:"#e40077",shadowColor:"#e40077",borderWidth:1,shadowBlur:5},label:{position:"center",color:"#e40077"}},
                        {value:85, name:'cc',itemStyle:{color:"#fbdcec"},label:{show:false},emphasis:{itemStyle:{color:"#fbdcec"}}},
                    ],
                    hoverAnimation: false,
                }
            ]

         }        
         
         this.chart4.setOption(option);
    
       
     },
     Chart5Render(){
        
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
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : this.chart5Data.xAxis_data,
                    axisTick: {
                        show :false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    max : 20000,
                    min : 0 ,
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
                    name:'各地市隐患工单量',
                    type:'bar',
                    barWidth: '30%',
                    itemStyle:{

                       color:"#5498ff"
                    },
                    data:this.chart5Data.series_data
                }
            ]

         }     
         
         this.chart5.setOption(option);

     },
     chartRender(){

        this.Chart1Render();
        this.Chart2Render();
        this.Chart3Render();
        this.Chart4Render();
        this.Chart5Render();
        
        //const sidebarElm = document.getElementsByClassName('sidebar-container')[0];

        window.addEventListener('resize',()=>{this.chart1.resize()});
        window.addEventListener('resize',()=>{this.chart2.resize()});
        window.addEventListener('resize',()=>{this.chart3.resize()});
        window.addEventListener('resize',()=>{this.chart4.resize()});
        window.addEventListener('resize',()=>{this.chart5.resize()});
        

        

        // sidebarElm.addEventListener('transitionend', ()=>{this.chart1.resize()});
        // sidebarElm.addEventListener('transitionend', ()=>{this.chart2.resize()});
        // sidebarElm.addEventListener('transitionend', ()=>{this.chart3.resize()});
        // sidebarElm.addEventListener('transitionend', ()=>{this.chart4.resize()});
        // sidebarElm.addEventListener('transitionend', ()=>{this.chart5.resize()});


     }
 
 
 
  },
  created(){

       
  },
  mounted(){
        
      this.chart1 = echarts.init(document.getElementById("chart1")); 
      this.chart2 = echarts.init(document.getElementById("chart2")); 
      this.chart3 = echarts.init(document.getElementById("chart3")); 
      this.chart4 = echarts.init(document.getElementById("chart4")); 
      this.chart5 = echarts.init(document.getElementById("chart5")); 
      
      
       
     // instance.getAllData().then(res=>{
   
     //     this.data=res
          
                 

          this.chartRender();
      //})


      
      
      
  }
}
</script>


<style  >

  .dashboard-editor-container {
      padding: 1px 20px 20px 20px;
      background-color: #f9f9f3;
      width: 100%;
      
  }
  .wrapper{
    background: #fff;
    padding: 10px; 
    border-radius:5px;
    font-size: 15px;
    box-shadow: 0px 0px 3px 3px #eee;
    font-size: 12px;
    color:#aaa;
    position: relative;
  }
  .dashboard-editor-container>.el-row {

     margin-top: 20px; 

  }
  .tip {

    height:40px;

  }
  .tip>.title{
     
    height:20px;line-height:20px;position:absolute;left:25px;

  }
  .tip>.close{
     
    height:20px;line-height:20px;position:absolute;right:20px;cursor:pointer;
     
  }
  .tip-enter-active,.tip-leave-active{
      transition:opacity 0.5s;
  }
  .tip-enter, .tip-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }
  .inspection-task> .title{
      
      height: 20px;
      margin-top: 5px;
  
  }
  .title-icon {

    position:absolute; width:5px; height:20px; background:#36e8c4; display:inline-block; 
    border-radius: 30%; box-shadow: 0px 0px 13px 0px rgba(54,232,196,0.2); margin-left: 5px;

  }
  .title-text {

    position:absolute;  display:inline-block; line-height:20px; height:20px; left:40px;
    font-size:15px; color: #000; font-weight: block;margin-top: 1px;

  }
  .title-select {
    position:absolute;  display:inline-block; line-height:20px; height:20px; right:25px;
   
  }

  .section {
     height:160px;  margin-top:20px;
  }
  
  .section-box {
    width:calc(33% - 60px); margin-left:90px; height:40px; padding:5px 10px; position:relative; float:left;
  }
  
  .section-box:nth-child(3n+1) {
    margin-left:0px;
  }

  .section-icon{
    position:absolute; left:5px; top:7px;  width:12px;height:12px; border-radius:50%; background:#5198ff; display:inline-block; box-shadow: 0px 0px 8.7px 1.3px rgba(153,194,255,0.6);
  }

  .section-text{
    position:absolute; left:25px; font-size:15px;
  }
  
  .section-num {
    position:absolute; right:20px; font-size:15px; color:#000; font-weight: 500;
  }

  .section-unit {
    position:absolute; right:0px; font-size:15px;
  }

  .plate1 {

    padding:15px 15px 10px 15px;
  }  

  .plate1-title {
    line-height:20px; height:20px; left:40px;font-size:15px; color: #000; font-weight: 400;
  }          
  
  .plate1-label {
    line-height:20px; height:120px; left:40px;font-size:14px; color: #000;  vertical-align: middle;
  }

  .plate1-left-label { 
     height:100%; line-height:120px; width:25%; float:left; text-align:left; color:#999999;
  }
  
  .plate1-center-label { 
     height:100%; line-height:120px; width:50%; float:left; text-align:center; font-size: 27px;
  }

  .plate1-right-label { 
     height:100%; line-height:120px; width:25%; float:left; text-align:right; color:#999999;
  }

  .plate2 {
     padding:15px 15px 10px 15px;
     height: 90px;  margin-top: 20px;
  }
  .plate2:nth-child(1) {
      margin-top: 0px;
  }
  .plate2-title {

     line-height: 60px;
     height: 100%;
     position: absolute;
     left: 20px;
     font-size: 15px;
     font-weight: 500;
     color: #000;
  }
  
  .plate2-num {

     line-height: 60px;
     height: 100%;
     position: absolute;
     right:20px;
     font-size: 30px;
     color: #5498ff;
    
  }
  

</style>
