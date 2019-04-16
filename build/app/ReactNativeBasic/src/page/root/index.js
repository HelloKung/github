import React, {Component} from 'react';
import { createAppContainer,createStackNavigator } from 'react-navigation';


import Loading from '../loading';
import Home from '../home';
import Login from '../login';
import Zps from '../statistic/zps'
import WebView from "../../components/WebView"
import { View,Text } from "react-native"
import { Button } from '../../../node_modules/react-native-elements';

const Container = createAppContainer(createStackNavigator({

        Loading:{

            screen:Loading,
            navigationOptions:({
               header:null
            })    
            
        },
        Login:{

            screen:Login,
            navigationOptions:({
              header:null
            })  

        },
        Home:{
           
            screen:Home,
            navigationOptions:({
              header:null
            })

        },
        Zps:Zps,
        WebView:WebView

},{

        initialRouteName:"Loading"
   
}))





export default class Root extends Component {

    constructor(props){

        super(props)

        
    }


    componentWillMount(){

     

    }
    componentDidMount(){

      

    }
   

    render() {
      
        
        return (
  
           
              <Container/>
           
        );
      
    
    }
  }