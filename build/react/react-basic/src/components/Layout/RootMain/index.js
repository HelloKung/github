import  React , {Component} from 'react'

export default class RootMain extends Component{


    render(){

         return (
             <div className="rootmain" style={{height:"calc(100% - 84px)",backgroundColor:"#fff"}}>
                {this.props.children}
             </div>
         )


    }



}
