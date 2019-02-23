import React , {Component} from 'react'
import { Card , Button} from 'antd'

import './index.less'

export default class ECharts extends Component{

    constructor(props){

       super(props)

    }
    componentWillMount(){


    }
    render(){

        return (
            <div>
               This is Ant Design page 
               <Card title="按钮板">
                   <Button type="primary">button</Button> 
               </Card>
            </div>
        )

    }



}