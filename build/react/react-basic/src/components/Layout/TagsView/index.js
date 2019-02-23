import  React , {Component} from 'react'

import { connect } from 'react-redux'
import { removeTag,selectTag } from './../../../redux/action'

import { Link } from 'react-router-dom'
import { Tag } from 'antd';



class TagsView extends Component{


    TagsRender = (list = {}) => {
        
        list = this.props.TagsViewList; 
 
        const {dispatch} = this.props;

        if(list&&list.all.length!=0)

        return  list.all.map((item) => {
             
             return (

                <Link to={item.path} style={{display:"inline-block"}} key={item.path}>
                    <Tag closable 
                        onClose={ e => {
                            
                            dispatch(removeTag(item.path))
                        }} 
                        
                        color={item.active?"#5dcc8c":"#108ee9"} 
                        
                        onClick={ () => {
                            
                            dispatch(selectTag(item.path))
                        } }
                    >
                        {item.name}
                    </Tag>
                </Link>
            )

        })


    }
    render(){

         return (
             <div className="tagsview" style={{padding:"6px 8px",overflow:"hidden"}}>
                {this.TagsRender()}
             </div>
         )


    }



}


export default connect( state => {
     
     

     return {

        TagsViewList:state.TagsViewList
     
    }
 

})(TagsView);