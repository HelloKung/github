import React, {Component} from 'react';
import { createSwitchNavigator,createAppContainer,createStackNavigator } from 'react-navigation';
import { Router,Stack,Scene,Actions } from 'react-native-router-flux'

import Loading from '../loading';
import Home from '../home';
import Login from '../login';
import Zps from '../statistic/zps'
import { AsyncStorage,View,Text } from "react-native"


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
  
          <Router>
            <Stack key="root">
              
              <Scene key="loading" component={Loading}  hideNavBar={true}  />
              <Scene key="login" component={Login}  hideNavBar={true}  />
              <Scene key="home" component={Home}    hideNavBar={true} />
              <Scene key="zps" component={Zps}  title="摘牌数" navigationBarStyle={{
                borderBottomColor:"#ccc",borderBottomWidth:3,boxShadowRadius:3
              }}/>
              
            </Stack>
          </Router>
        );
      
    
    }
  }