import React , {Component,Fragment} from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'

import OnlineMap from  "./components/onlineMap"
import BarChart from  "./components/barChart"
import LineChart from  "./components/lineChart"
import PieChart from  "./components/pieChart"
import RadarChart from  "./components/radarChart"



import './index.less'

export default class Home extends Component{

    constructor(props){

       super(props)

    }
    componentWillMount(){

       this.getTime(); 

    }
    getTime = () => {

        this.setState({time:""})   

        setInterval(() => {

            this.setState({
            
                time:moment().format("LLLL")
            
            })

        },1000) 


    }
    render(){

        return (
            <div>
               <div className="main-home">
                  {/* 背景地图  */}
                  <div className="onlineMap">
                     <OnlineMap/>
                  </div>
                  {/* 左侧阴影 */}
                  <div className="left-shadow"/>
                  {/* 右侧阴影 */}
                  <div className="right-shadow"/>
                  
                  {/* 左上 */}
                  <div className="leftIndex">
                     <div className="title">沈阳市大屏展示React-Demo</div>
                     <div className="content">
                         <div>
                            <div className="num">2154</div> 
                            <div className="name">方案制作</div> 
                         </div>
                         <div>
                            <div className="num">2635</div> 
                            <div className="name">光路调度</div> 
                         </div> 
                         <div>
                            <div className="num">3560</div> 
                            <div className="name">网管验证</div> 
                         </div> 
                         <div>
                            <div className="num">1028</div> 
                            <div className="name">工程整改</div> 
                         </div>  
                     </div>
                  </div>
                  {/* 左中柱图 */}
                  <div className="barChart">
                     <BarChart/>
                  </div>
                  {/* 左下面积图 */}
                  <div className="lineChart">
                     <LineChart/>
                  </div>
                  {/* 右上标题  */}
                  <div className="title-time">
                     <div>{this.state.time}</div>
                  </div>
                  {/* 雷达图  */}
                  <div className="radarChart">
                     <RadarChart/>
                  </div>
                  {/* 右下饼图,极坐标图 */}
                  <div className="pieChart">
                     <PieChart/>
                  </div>
                  
                  
                  


                  
               </div>
            </div>
        )

    }



}