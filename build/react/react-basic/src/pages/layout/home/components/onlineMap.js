import React , {Component,Fragment} from 'react'
import ReactEcharts from 'echarts-for-react'

import 'echarts/dist/extension/bmap.min.js'

//import echarts from 'echarts'
import bgurl from '../../../../assets/img/background/onlineMap.jpg'

export default class barChart extends Component{

    constructor(props){

       super(props)

    }
    componentWillMount(){

       let card = [] , port = [] ;

       for(let i = 0 ; i < 40 ;i++){

          card.push({name:"板卡",value:[Math.random() * 0.23 + 123.32,Math.random() * 0.2 + 41.71,Math.random()*10 + 15]})
          port.push({name:"端口",value:[Math.random() * 0.23 + 123.32,Math.random() * 0.2 + 41.71,Math.random()*10 + 15]})
       } 

       this.setState({  //[123.32, 123.55] [41.71,41.91]
          card,
          port
       })

        
    }
    componentDidMount(){
       
       
    }
    getOption = () => {
        
        let option = {
           
                tooltip : {
                    trigger: 'item',
                    formatter:((item)=>{

                        return  `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color}"></span>
                                 <span>${item.seriesName} : ${parseInt(item.value[2])}</span>
                                 `
                    })
                },
                bmap: {
                    center: [116.401394,39.921797],
                    zoom: 12,
                    //roam: true,
                    mapStyle: {
                        styleJson: [
                                {
                                    "featureType": "water",
                                    "elementType": "all",
                                    "stylers": {
                                        "color": "#044161"
                                    }
                                },
                                {
                                    "featureType": "land",
                                    "elementType": "all",
                                    "stylers": {
                                        "color": "#004981"
                                    }
                                },
                                {
                                    "featureType": "boundary",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#064f85"
                                    }
                                },
                                {
                                    "featureType": "railway",
                                    "elementType": "all",
                                    "stylers": {
                                      "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "highway",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#004981"
                                    }
                                },
                                {
                                    "featureType": "highway",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#005b96",
                                        "lightness": 1
                                    }
                                },
                                {
                                    "featureType": "highway",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "arterial",
                                    "elementType": "geometry",
                                    "stylers": {
                                        "color": "#004981"
                                    }
                                },
                                {
                                    "featureType": "arterial",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#316da9"
                                    }
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "all",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "green",
                                    "elementType": "all",
                                    "stylers": {
                                        "color": "#056197",
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "subway",
                                    "elementType": "all",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "manmade",
                                    "elementType": "all",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "local",
                                    "elementType": "all",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "arterial",
                                    "elementType": "labels",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                },
                                {
                                    "featureType": "boundary",
                                    "elementType": "geometry.fill",
                                    "stylers": {
                                        "color": "#029fd4"
                                    }
                                },
                                {
                                    "featureType": "building",
                                    "elementType": "all",
                                    "stylers": {
                                        "color": "#1a5787"
                                    }
                                },
                                {
                                    "featureType": "label",
                                    "elementType": "all",
                                    "stylers": {
                                        "visibility": "off"
                                    }
                                }
                        ]
                    }
            
            },
            series:[{
                
                name: '板卡数量',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: this.state.card,//{name:"市中心",value:[123.43,41.81,20]}, //[123.32, 123.55] [41.71,41.91]
                symbolSize: function (val) {
                    return val[2];
                },
                itemStyle: {
                    color: '#ddb926'
                }
            
            },{
                
                name: '端口数量',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: this.state.port,//{name:"市中心",value:[123.43,41.81,20]}, //[123.32, 123.55] [41.71,41.91]
                symbolSize: function (val) {
                    return val[2];
                },
                itemStyle: {
                    color: '#e68837'
                }
            
            }]
        }
          
        //chart.setOption(option);

        return option;
    }
    render(){

        return (
            
           <Fragment> 
               <ReactEcharts   
                  style={{width:"100%",height:"100%"}} 
                  option={this.getOption()} 
               />
               {/* {<img src={bgurl} style={{width:"100%",height:"100%"}} />} */}
           </Fragment> 
        )

    }



}