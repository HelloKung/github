import React , {Component,Fragment} from 'react'

import ReactEcharts from 'echarts-for-react';


export default class radarChart extends Component{

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
 
        let  option = {

                tooltip: {},
                legend: {
                    left:0,
                    top:0,
                    orient:"vertical",
                    data: ["接入层","核心层"],
                    color:["#ff9800","#ffc107","#8bc34a"],
                    textStyle:{
                        color:"#71bef1",
                        fontSize:10
                    },
                    itemWidth:15,
                    itemHeight:10
                },
                radar: {
                    // shape: 'circle',
                    center:["55%","50%"],
                    name: {
                        textStyle: {
                            color: '#71bef1'
                    }
                    },
                    indicator: [
                        { name: '销售', max: 6500},
                        { name: '管理', max: 16000},
                        { name: '信息', max: 30000},
                        { name: '客服', max: 38000},
                        { name: '研发', max: 52000},
                        { name: '市场', max: 25000}
                    ],
                    splitArea:{
                        show:true,
                        areaStyle:{
                            color:["rgba(113,190,241,0.6)","rgba(113,190,241,0.4)"]
                        }
                    }
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '接入层',
                            lineStyle:{
                                color:"#ff9800"
                            },
                            itemStyle:{
                                color:"#ff9800"
                            }
                        },
                        // {
                        //     value : [5000, 14000, 28000, 31000, 42000, 21000],
                        //     name : '汇聚层',
                        //     lineStyle:{
                        //         color:"#ffc107"
                        //     },
                        //     itemStyle:{
                        //         color:"#ffc107"
                        //     }
                        // },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '核心层',
                            lineStyle:{
                                color:"#8bc34a"
                            },
                            itemStyle:{
                                color:"#8bc34a"
                            }
                        }
                    ]
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