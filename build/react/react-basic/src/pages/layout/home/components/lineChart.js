import React , {Component,Fragment} from 'react'

import ReactEcharts from 'echarts-for-react';


export default class lineChart extends Component{

    constructor(props){

       super(props)

    }
    componentWillMount(){
       
        this.setState({
            data:[0,0,0,0,0,0,0].map(item => parseInt(Math.random()*1400+100))
        })
    }
    componentDidMount(){
       
       
    }
    getOption = () => {
        
       

        let option = {
           
                grid:{
                    top:30,
                    right:10,
                    left:44,
                    bottom:50
                },
                tooltip:{
                    show:true,
                    trigger:"axis",
                    axisPointer:{
                        type:"shadow"
                    }
                },
                legend:{
                    textStyle:{
                        color:"#71bef1"
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ["周一", "周二", "周三" , "周四" , "周五" , "周六" , "周日" ],
                    axisLine:{show:false},
                    axisLabel:{
                        color:"#71bef1",
                        interval:0
                    },
                    axisTick:{
                        show:false
                    },
                    boundaryGap:false,
                },
                yAxis: {
                    type: "value",
                    max: 1500,
                    axisLine:{show:false},
                    axisLabel:{
                        color:"#71bef1",
                        interval:0
                    },
                    axisTick:{
                        lineStyle:{
                          color:"#71bef1",
                        }
                    },
                    splitLine:{
                        lineStyle:{
                          color:"#71bef1"  
                        }
                        
                    }
                },
                series: [{
                    
                    name:"PTN",
                    type: "line",
                    smooth: true,
                    color:"rgba(199,212,75,0.8)",
                    symbol:"none",
                    lineStyle:{
                        width:1
                    },
                    areaStyle:{},
                    data:[1300,1188,710,260,110,80,0]
                    
                   
                },{
                    
                    name:"OTN",
                    type: "line",
                    smooth: true,
                    color:"rgba(249,206,77,0.8)",
                    symbol:"none",
                    lineStyle:{
                        width:1
                    },
                    areaStyle:{},
                    data:[20,140,480,840,370,0,0]
                    
                   
                },{
                    
                    name:"SDH",
                    type: "line",
                    smooth: true,
                    color:"rgba(255,152,0,0.8)",
                    symbol:"none",
                    lineStyle:{
                        width:1
                    },
                    areaStyle:{},
                    data:[0,0,0,80,280,780,700]
                    
                   
                }]
        };
          
        return option;
    }
    render(){

        return (
            
           <Fragment> 
               <ReactEcharts   
                  style={{width:"100%",height:"100%"}} 
                  option={this.getOption()} 
               />
           </Fragment> 
        )

    }



}