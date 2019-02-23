import React , {Component,Fragment} from 'react'

import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts';

export default class barChart extends Component{

    constructor(props){

       super(props)

    }
    componentWillMount(){
       
        this.setState({
            data:[0,0,0,0,0].map(item => parseInt(Math.random()*3000+600))
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
                xAxis: {
                    type: 'category',
                    data: ["扩容工单", "分级调度", "流程工单" , "隐患库工单" , "巡检达标" ],
                    axisLine:{show:false},
                    axisLabel:{
                        color:"#71bef1",
                        interval:0
                    },
                    axisTick:{
                        show:false
                    }
                },
                yAxis: {
                    type: "value",
                    max: 4000,
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
                        show:false
                    }
                },
                series: [{
                    type: "pictorialBar",
                    color:"rgba(115,234,209,0.3)",
                    symbolRepeat:true,
                    symbolMargin:2,  
                    symbol:"rect",
                    symbolSize:[40,5],
                    data: this.state.data.map(item => 4000), 
                    tooltip:{show:false},
                    label:{
                        show:true,
                        position:"top",
                        color:"#73ead1",
                        formatter:(item)=>{
                            
                            return this.state.data[item.dataIndex]
                        },
                        fontSize:14
                    }

                },{
                    name:"数量",
                    type: "pictorialBar",
                    color:"#73ead1",
                    symbolRepeat:true,
                    symbolMargin:2,  
                    symbol:"rect",
                    symbolSize:[40,5],
                    data: this.state.data, 

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