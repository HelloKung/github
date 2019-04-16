import React, {Component, PropTypes} from "react";
import { View,Text,ScrollView,StyleSheet,TouchableHighlight,Button } from "react-native"
import HeadNavigator from "../../components/HeadNavigator"
import NavigationBar from "../../components/NavigationBar"
import { Header } from "react-native-elements"
import ScrollableTabView,{ ScrollableTabBar } from "react-native-scrollable-tab-view"
import { width,sw,sh } from "../../public/AdapterUtil"
import Icon from "react-native-vector-icons/Feather"
import { NavigationActions,createAppContainer,createMaterialTopTabNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux'


import Detail from "./detail";
export default class Statistic extends Component {

    

    constructor(props){

        super(props)
      

    }
    componentWillMount(){

       
      
    }
    openWebView = (url) => {

         
        this.props.navigation.navigate("WebView", { url });

    }
    rightComponent(){

        return (
         
            <View style={{flexDirection:"row"}}>
                <TouchableHighlight 
                   style={{marginRight:20}} 
                   onPress={() => {
                   

                        console.warn("搜索按钮")


                   }
                }>
                  <Icon name="search" color={"#fff"} size={20} />
                </TouchableHighlight>
                <TouchableHighlight 
                   onPress={() => {

                       console.warn("详情按钮");

                   }
                }>
                  <Icon name="more-vertical" color={"#fff"} size={20} />
                </TouchableHighlight>
                
            </View>
        ) 


    }
    render(){

        return(
        
            <View  style={{flex:1}}>
                <Header
                  
                  centerComponent = {{text:"Popular",style:{color:"#fff",fontSize:20,justifyContent:"center"}}}
                  containerStyle = {{
                    backgroundColor:"#333",
                    justifyContent:"center",
                    alignItems:"center",
                    height:60,
                    paddingBottom:25,
                    borderBottomColor:"#333"
                  }}
                  rightComponent = {this.rightComponent}
                 
                />
                <ScrollableTabView
                     renderTabBar={()=><ScrollableTabBar/>}
                     tabBarBackgroundColor={"#333"}
                     tabBarActiveTextColor={"#fcaf41"}
                     tabBarInactiveTextColor={"#fff"}
                     tabBarUnderlineStyle={{backgroundColor:"#fcaf41",height:2}}
                     tabBarTextStyle={{fontSize:16}}
                >
                    <Detail tabLabel="Java"  {...this.props} onSelect={this.openWebView}/>
                    <Detail tabLabel="Ios"   {...this.props} onSelect={this.openWebView}/>
                    <Detail tabLabel="React" {...this.props} onSelect={this.openWebView}/>
                    <Detail tabLabel="Vue"   {...this.props} onSelect={this.openWebView}/>
                </ScrollableTabView>
                
                
            </View>
        
        )

    }
 

}






const styles = StyleSheet.create({

     NavigationBar:{

         backgroundColor:"#333",
        
     },
     containerStyle:{
         height:60
     }


})