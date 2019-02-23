import React, {Component, PropTypes} from "react";
import { View,Text,ImageBackground,StyleSheet,AsyncStorage } from "react-native"
import { Actions } from 'react-native-router-flux'


export default class Nco extends Component {
    

    constructor(props){

       super(props);

    }

    componentWillMount(){


        
      AsyncStorage.getItem("login").then(data => {

        

           let  isLogin = data == "true"? true:false
    
           setTimeout(()=>{
           
                if(isLogin)  
                
                        Actions.home();
                else   
                        Actions.login();
                
           },2000)     
      })

    

    }



    render(){

        return(
            <View style = {styles.container}>
                <ImageBackground   style = {styles.img}  source={require('../../asset/image/bootbg.png')} >
                   
                </ImageBackground>
            </View>
        )

    }
 

}



const styles = StyleSheet.create({

    container:{
  
        flex:1

    },
    img:{
         flex:1,
         width:"100%",
         height:"100%",
         alignItems:"center"
    }



})