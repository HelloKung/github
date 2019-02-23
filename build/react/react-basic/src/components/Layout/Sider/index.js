import React , {Component} from 'react'
import { Menu, Icon, Button } from 'antd';
import MenuConfig  from '../../../router/config/index.js' 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu , addTag } from './../../../redux/action'


class Sider extends Component{
    
    constructor(props){

       super(props)

    
    }
    componentWillMount(){

        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode,
            currentKey:""
        })
    }
    breadcrumbRender = ({ item, key, keyPath }) => {
        
        const {dispatch} = this.props; ///redux 引用 connect 功能

        dispatch(switchMenu(item.props.title))
        dispatch(addTag({
            name:item.props.title,
            path:key
        })) 

        this.setState({
            currentKey:key
        })

    }
    renderMenu = (data)=>{  ///渲染菜单

        return data.map((item,index) => {

             if(!item.children){

                return (

                  <Menu.Item title={item.title} key={item.path} onClick={ this.breadcrumbRender }>
                    <Link to={item.path} >
                      <Icon type= { item.meta && item.meta.icon ? item.meta.icon:"" } />
                        <span>
                            {item.title}
                        </span>
                    </Link>  
                  </Menu.Item>
                  
                )

             } else {
              
                return (
                    <Menu.SubMenu key={item.path} 
                        title={<span><Icon type= { item.meta && item.meta.icon ? item.meta.icon:"" } />
                                 <span>{item.title}</span>
                               </span>}
                    >    
                        {this.renderMenu(item.children)}
                    </Menu.SubMenu>
                )


             } 


        })

    }
    render(){


        return (
        
            <div style={{ width: '100%' }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.isCollapse}
                    style={!this.props.isCollapse?{}:{marginLeft:"-13px"}}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        
       )



     }





}


const mapStateToProps = state => {
    
    return {
    
         menuName:state.menuName,
         isCollapse:state.isCollapse
    }

}


export default connect(mapStateToProps)(Sider);///redux管理