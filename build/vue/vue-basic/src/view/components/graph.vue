<template>
    <div>
        <div  id="chart1" style="width:100%; height:560px; " > </div>
 
    
    </div>
  
</template>


<script>

import echarts from 'echarts'



export default{

     data(){
        
        let data = {
 
             node:{},
             none_arrow:{},
             none_none:{},
             arrow_arrow:{},
        }

        return data;
     },
     methods:{
        
        draw(){

          this.draw_node();
          this.draw_line_none_arrow();




        },
        draw_node(){

           this.node = {
               type:"graph",
               symbolSize:30,
               symbol:"circle",
               roam:true,
               edgeSymbol:["none","arrow"],
               label:{show:true,position:"bottom"},
               itemStyle:{color:"#fcaf41"},
               hoverAnimation:false,
               edgeLabel:{show:false,color:"#000"},
               nodes:[
                  { name:"开始",x:30,y:100,symbol:"rect"},
                  
                  { name:"入网申请",x:70,y:100},
               
                  { name:"方案制作",x:110,y:100},
                  { name:"方案评审",x:110,y:60},
                  { name:"方案数据修改",x:110,y:180},
                  
                  { name:"设备加电",x:150,y:60},
                  { name:"光路调度",x:150,y:120},

                  { name:"现场数据制作",x:190,y:60},
                  { name:"光路调度1",x:190,y:100,label:{formatter:()=>`光路调度`}},
                  { name:"网管数据制作",x:190,y:140},
                  { name:"资源数据核查",x:190,y:180},
                  
                  { name:"降等入网",x:230,y:100},
                  { name:"网管验证",x:230,y:180},
                  { name:"工程整改",x:230,y:220},
                  
                  { name:"二级领导审核",x:270,y:80},
                  

                  { name:"竣工资料审核",x:310,y:140},
                  { name:"竣工资料上传",x:310,y:180},

                  { name:"归档",x:350,y:140},
                   
                  { name:"结束",x:390,y:140,symbol:"rect"},
                  
                  ///////
                  { name:"hide1",x:310,y:60,symbolSize:0},
                  { name:"hide2",x:110,y:40,symbolSize:0},
                  { name:"hide3",x:110,y:30,symbolSize:0},
                  { name:"hide4",x:350,y:40,symbolSize:0},
                  { name:"hide5",x:350,y:30,symbolSize:0},
                  
 
                  ///////////////////////////////////////////////
                //   { name:"_开始",x:40,y:100,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{color:"#ff0",opacity:0}},
                  
                //   { name:"_入网申请",x:70,y:100,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
               
                //   { name:"_方案制作",x:110,y:100,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_方案评审",x:110,y:60,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_方案数据修改",x:110,y:180,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                  
                //   { name:"_设备加电",x:150,y:60,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_光路调度",x:150,y:120,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},

                //   { name:"_现场数据制作",x:190,y:60,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_光路调度1",x:190,y:100,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_网管数据制作",x:190,y:140,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_资源数据核查",x:190,y:180,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                  
                //   { name:"_降等入网",x:230,y:100,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_网管验证",x:230,y:180,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_工程整改",x:230,y:220,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                  
                //   { name:"_竣工资料审核",x:310,y:140,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                //   { name:"_竣工资料上传",x:310,y:180,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},

                //   { name:"_归档",x:350,y:140,symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},
                   
                //   { name:"_结束",x:390,y:140,symbol:"rect",symbolSize:50,tooltip:{show:false},label:{show:false},itemStyle:{opacity:0}},



                  

               ],
               links:[
                   { source:"开始",target:"入网申请"}, 
                   { source:"入网申请",target:"方案制作",label:{show:true,formatter:()=>`不通过`},symbol:["arrow","arrow"]}, 
                   { source:"方案制作",target:"方案评审"}, 
                   { source:"方案评审",target:"方案制作",label:{show:true,formatter:()=>`不通过`},lineStyle:{curveness: - 0.3} }, 
                   { source:"网管数据制作",target:"方案制作",label:{show:true,formatter:()=>`不通过`},lineStyle:{curveness: 0.7} }, 
                   { source:"设备加电",target:"方案制作",label:{show:true,formatter:()=>`不通过`}}, 
                   { source:"方案评审",target:"设备加电"},
                   { source:"设备加电",target:"现场数据制作"},
                   { source:"现场数据制作",target:"二级领导审核",label:{show:true,formatter:()=>`通过或不通过`}},
                   { source:"二级领导审核",target:"降等入网"},
                   { source:"降等入网",target:"网管数据制作"},
                   { source:"现场数据制作",target:"光路调度1"},
                   { source:"光路调度1",target:"网管数据制作"},
                   { source:"现场数据制作",target:"网管数据制作",label:{show:true,formatter:()=>`不需要光调`},lineStyle:{curveness: - 0.3}},
                   { source:"光路调度",target:"网管数据制作",lineStyle:{curveness:  0.5}},
                   { source:"网管数据制作",target:"光路调度",label:{show:true,formatter:()=>`补光路调度`}},
                   { source:"方案数据修改",target:"网管数据制作"},
                   { source:"网管数据制作",target:"资源数据核查"},
                   { source:"资源数据核查",target:"网管数据制作",label:{show:true,formatter:()=>`退回网管数据制作`},lineStyle:{curveness:  - 1}},
                   { source:"资源数据核查",target:"方案数据修改",label:{show:true,formatter:()=>`退回方案数据修改`}},
                   { source:"资源数据核查",target:"网管验证"},
                   { source:"网管验证",target:"工程整改",label:{show:true,formatter:()=>`需要整改`},lineStyle:{curveness:  -0.5}},
                   { source:"工程整改",target:"网管验证",lineStyle:{curveness:  -0.5}},
                   { source:"网管验证",target:"竣工资料上传"},
                   { source:"竣工资料上传",target:"竣工资料审核"},
                   { source:"竣工资料审核",target:"竣工资料上传",label:{show:true,formatter:()=>`不通过`},lineStyle:{curveness:  0.5}},
                   { source:"竣工资料审核",target:"归档"},
                   { source:"归档",target:"结束"},
                   { source:"资源数据核查",target:"hide1",symbol:["none","none"]},
                   { source:"hide1",target:"现场数据制作",label:{show:true,formatter:()=>`返回现场数据制作`}}, 
                   { source:"方案评审",target:"hide2",symbol:["none","none"]},
                   { source:"hide2",target:"hide3",symbol:["none","none"]},
                   { source:"hide3",target:"hide5",label:{show:true,formatter:()=>`作废`},symbol:["none","none"]},
                   { source:"hide5",target:"hide4",symbol:["none","none"]},
                   { source:"hide2",target:"hide4",label:{show:true,formatter:()=>`作废`},symbol:["none","none"]},   
                   { source:"hide5",target:"归档",symbol:["none","arrow"]},
              ]


           }
        },  
        draw_line_none_arrow(){
           
        //    this.none_arrow = {
        //         type:"graph",
        //         symbolSize:30,
        //         itemStyle:{color:"#ff0"},
        //         edgeSymbol:["none","arrow"],
        //         nodes:[
        //           { name:"开始",x:40,y:100,symbol:"rect"},
                  
        //           { name:"入网申请",x:70,y:100},
               
        //           { name:"方案制作",x:110,y:100},
        //           { name:"方案评审",x:110,y:60},
        //           { name:"方案数据修改",x:110,y:180},
                  
        //           { name:"设备加电",x:150,y:60},
        //           { name:"光路调度",x:150,y:120},

        //           { name:"现场数据制作",x:190,y:60},
        //           { name:"光路调度1",x:190,y:100,label:{formatter:()=>`光路调度`}},
        //           { name:"网管数据制作",x:190,y:140},
        //           { name:"资源数据核查",x:190,y:180},
                  
        //           { name:"降等入网",x:230,y:100},
        //           { name:"网管验证",x:230,y:180},
        //           { name:"工程整改",x:230,y:220},
                  
        //           { name:"竣工资料审核",x:310,y:140},
        //           { name:"竣工资料上传",x:310,y:180},

        //           { name:"归档",x:350,y:140},
                   
        //           { name:"结束",x:390,y:140,symbol:"rect"},
        //         ],
        //         links:[
                  
        //         ]

        //    }



        },
        chartRender(){

             this.draw();

             let option = {
  
                    title:[],
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                       this.node,
                    //    this.arrow_arrow,
                    //    this.none_arrow,
                    //    this.none_arrow,
                    ]
                };

             this.chart.setOption(option);
         }
         



     },
     mounted(){

          this.chart=echarts.init(document.getElementById("chart1"));
          
          this.chartRender();
     }


}




</script>