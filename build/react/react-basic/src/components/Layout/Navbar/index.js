import React,{Component} from 'react'

import { connect } from 'react-redux'
import { hamClick } from './../../../redux/action'

import { Icon } from 'antd'


import './index.less' 

import axios from 'axios';
import JsonP from '../../../public/axios/jsonp.js'


class Navbar extends Component{

    constructor(props){

        super(props) 

    }
    componentWillMount(){
       
    //    axios.post("http://10.4.2.8:7300/mock/5bdea2d98107910879608b77/tcoamp/ca/day_worklist_statistics/error_menum_detail/getListTableData")
         
    //    .then((res)=>{

    //       console.log(res);
    //       //return axios.post("http://api.map.baidu.com/api?v=2.0&ak=E4805d16520de693a3fe707cdc962045");
        
    //    })

    //    JsonP.jsonp({
       
    //        url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent("沈阳")+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
       
    //    }).then((res)=>{

    //        console.log(res);
    //    })


      this.setState({
          num:10
      })

    }
    HandleClickHamburger = () => {

         const {dispatch} = this.props;
   
         dispatch(hamClick(!this.props.isCollapse))

         
    } 
    render(){

          return (

             <div className="navbar">
                <div  className="hamburger">
                   <Icon type={!this.props.isCollapse? "menu-unfold":"menu-fold" } style={{cursor:"pointer"}} onClick={ this.HandleClickHamburger}/> 
                </div>
                <div  className="breadcrumb">
                 { this.props.menuName } 
                </div>
             </div>


          );



    }




}


const mapStateToProps = state => {
    
    return {
    
         menuName:state.menuName,
         isCollapse:state.isCollapse
    }

}


export default connect(mapStateToProps)(Navbar);