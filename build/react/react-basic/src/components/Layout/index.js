import React,{ Component } from 'react'
import { Row,Col } from 'antd';
import Sider from './Sider';
import Navbar from './Navbar';
import TagsView from './TagsView';
import RootMain from './RootMain';
import { connect } from 'react-redux'

import './index.less';


class Layout extends Component  {

    render(){

        return (
            
            <Row className="container">
               <Col span={!this.props.isCollapse ? 4:1}     className="siderbar">  
                      <Sider />
               </Col>
               <Col span={!this.props.isCollapse ? 20:23}  className="main-container">  
                    <Navbar/>
                    <TagsView/>
                    <RootMain>
                        {this.props.children}
                    </RootMain>
               </Col>
            </Row>


        )
  


    }



}


export default connect((state) => {
  
     return {
        isCollapse:state.isCollapse
     }

})(Layout)