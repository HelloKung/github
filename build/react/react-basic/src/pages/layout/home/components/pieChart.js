import React , {Component,Fragment} from 'react'

import ReactEcharts from 'echarts-for-react';


export default class pieChart extends Component{

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

            
            angleAxis: {
                axisLabel:{
                    //show:false,
                    color:"#71bef1",
                    interval:0,
                },
                axisLine:{
                    show:false
                },
                splitLine:{
                    lineStyle:{
                        color:"rgba(113,190,241,0.4)"
                    }
                }
            },
            radiusAxis: {
                type: 'category',
                data: ['一级调度故障', '二级调度故障', '三级调度故障', '四级调度故障'],
                z: 10,
                axisLabel:{
                    show:false,
                    color:"#71bef1",
                    interval:0,
                },
                axisLine:{
                    show:false
                }
            },
            polar: {
                radius:70,
                center:["55%","50%"]
            },
            series: [{
                type: 'bar',
                color:"#ff9800",
                data: [1, 2, 3, 4],
                coordinateSystem: 'polar',
                name: '2017',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 8],
                color:"#ffc107",
                coordinateSystem: 'polar',
                name: '2018',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4],
                color:"#8bc34a",
                coordinateSystem: 'polar',
                name: '2019',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['2017', '2018', '2019'],
                textStyle:{
                    color:"#71bef1",
                    fontSize:10
                },
                left:0,
                orient:"vertical",
                itemWidth:15,
                itemHeight:10
            },
            tooltip:{

            }
        };
        
          
        return option;
    }
    getIndexOption = (value,name) => {
 
        let  option = {
                
              
                title:[{
                    
                    x:"center",
                    y:"center",
                    text:`{name|${value}%}\n{radio|${name}}`,
                    textStyle:{
                        
                        //fontSize:10,
                        rich:{
                            name:{
                               color:"#71bef1",
                               fontSize:18
                            },
                            radio:{
                               color:"#ff9800",
                               fontSize:12,
                               lineHeight:20
                            }
                        }
                    }
                }],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name:name,
                        type:'pie',
                        hoverAnimation:false,
                        radius: ['70%', '80%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            show: false
                        },
                        data:[
                            {value:value, name:'占比',itemStyle:{color:"#1b4eb5"}},
                            {value:100-value, name:'',tooltip:{show:false},itemStyle:{color:"#ff9800"}}
                        ]
                    }
                ]
        };
    

        return option;

    }
    render(){

        return (
            
           <Fragment> 
              <div style={{width:"70%",height:"100%",float:"left"}}> 
                <ReactEcharts   
                    style={{width:"100%",height:"100%"}} 
                    option={this.getOption()} 
                />
              </div> 
              <div style={{width:"30%",height:"100%",float:"left",marginLeft:"-20px"}}>
                <div style={{width:"100%",height:"50%"}}>
                    <ReactEcharts   
                        style={{width:"100%",height:"100%"}} 
                        option={this.getIndexOption(54,"双规比")} 
                    />
                </div>              
                <div style={{width:"100%",height:"50%"}}>
                    <ReactEcharts   
                        style={{width:"100%",height:"100%"}} 
                        option={this.getIndexOption(44,"成环率")} 
                    />
                </div>              
              </div>

           </Fragment> 
        )

    }



}