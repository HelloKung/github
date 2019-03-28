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
               <Card title="按钮板">
                   <Button type="primary">Primary</Button> 
                   <Button type="dashed">Dashed</Button> 
                   <Button type="danger">Danger</Button> 
                   <Button >Default</Button> 
               </Card>
            </div>
        )

    }



}