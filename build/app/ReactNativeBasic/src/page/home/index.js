import React, {Component, PropTypes} from "react";
import {View, Image} from "react-native";
import { createSwitchNavigator,createAppContainer,createStackNavigator,createBottomTabNavigator,withNavigation } from 'react-navigation';
import Icon  from "react-native-vector-icons/AntDesign"


import Statistic from '../statistic'
import Find from '../find'
import Nco from '../nco'
import User from '../user'



const Home = createAppContainer(createBottomTabNavigator({
    
    Statistic: {
        
        screen: Statistic,
        navigationOptions:{
            tabBarLabel:"指标统计",
            tabBarIcon:({tintColor})=>(<Icon name="linechart" color={tintColor}  size={16}/>)
        }
    
    },
    Find: {

        screen: Find,
        navigationOptions:{
            tabBarLabel:"查询",
            tabBarIcon:({tintColor})=>(<Icon name="search1" color={tintColor}  size={16}/>)
        }
    
    },
    Nco: {
        
        screen: Nco,
        navigationOptions:{
            tabBarLabel:"割接",
            tabBarIcon:({tintColor})=>(<Icon name="rocket1" color={tintColor}  size={16}/>)
        }
    
    },
    User: {
       
        screen: User,
        navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({tintColor})=>(<Icon name="github" color={tintColor}   size={16}/>),
            
        }  
    
    },
  
 },{

    initialRouteName: 'Statistic', // 默认显示界面
    backBehavior:null,
    tabBarOptions:{
        activeTintColor:"#03a9f4", 
        inactiveTintColor:"#fff", 
        showIcon :true,
        labelStyle :{
           fontSize:14,
        },
        style :{
           backgroundColor:"#333"
        }
    }
 }
))





export default withNavigation(Home)