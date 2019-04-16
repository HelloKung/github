
import React, {Component, PropTypes} from 'react';

import { View,Text,StyleSheet,TouchableHighlight,StatusBar} from 'react-native';
import  Icon  from "react-native-vector-icons/AntDesign";
import { width,height } from "../public/AdapterUtil"


export default class HeadNavigator extends Component {

    
    constructor(props){

        super(props) 

        
    }
    HandleClick = (type) => {


         console.warn(type); 

    }
    render(){

          return (
               
             <View style={styles.container}>
               <View style={styles.buttonBox}>
                  <TouchableHighlight 
                     style={styles.button}
                     onPress={() => this.HandleClick("leftbutton")}
                  >
                      <Icon name="bars" color={"#fff"}  size={26} />
                  </TouchableHighlight>
               </View>
               <View >
                  <Text style={styles.title} >HeaderBar</Text>
                  
               </View>
               <View style={styles.buttonBox}>
                  <TouchableHighlight 
                     style={styles.button}
                     onPress={() => this.HandleClick("rightbutton")}
                  >
                      <Icon name="hdd" color={"#fff"}  size={26} />
                  </TouchableHighlight>
               </View> 
             </View>

          )



    }




}


const styles = StyleSheet.create({

     container:{

         height:80,
         backgroundColor:"#333",
         flexDirection:"row",
         display:"flex",
         justifyContent:"space-between",
         alignItems:"center"

     },
     title:{

         color:"#fff",
         fontSize:20

     },
     buttonBox:{

         width:width*0.1,
         borderColor:"#ff0000",
         justifyContent:"center",
         alignItems:"center"

     },
     button:{
          
         

     }




})