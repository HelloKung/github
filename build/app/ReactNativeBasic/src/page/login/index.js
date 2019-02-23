import React,{ Component } from "react"
import { View,Text,TextInput,Image,ImageBackground,Dimensions,StyleSheet,TouchableHighlight } from  "react-native"
import Button   from  "react-native-button"
import Icon  from "react-native-vector-icons/AntDesign"
import { sw , sh , sf } from '../../public/AdapterUtil'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'
//import storage from '../../public/AsyncStorage'
import { AsyncStorage } from "react-native"


export default class Login extends Component {
    
    

    constructor(props){

         super(props);

         this.state = {
            
             userName:"",
             passWord:""
         };
         

    }
    componentWillMount(){

        //  console.warn("width:",Dimensions.get('window').width);
        //  console.warn("height:",Dimensions.get('window').height);
        //  console.warn("scale:",Dimensions.get('window').scale);
    
    }
    login = () =>{
        
        AsyncStorage.setItem("login","true");
     
        Actions.home();

    }
    render(){

        return (

          <View style={styles.container}>
          
             <ImageBackground style={styles.bgImage} source={require('../../asset/image/bg1.png')}>

                <Text style={{color:"#4e97f4",fontSize:30*sf,marginTop:160*sh,fontWeight:"bold",textShadowColor:"#489688",textShadowRadius:10,textShadowOffset:{width:1,height:1}}}>传输性能分析系统</Text>
                <Text style={{color:"#4e97f4",fontSize:22*sf,marginTop:10*sh,fontWeight:"bold",textShadowColor:"#489688",textShadowRadius:10,textShadowOffset:{width:1,height:1}}}>Transmission Preformance Analysis System</Text>
                
                <View style={styles.login}>
                    <View style={styles.loginBox}> 
                       <Icon style={styles.loginIcon} name="user"/>
                       <TextInput style={styles.loginInput}  placeholder={"请输入用户名称"} 
                          placeholderTextColor={"#aaa"} selectionColor={"#000"}
                          clearButtonMode={"always"}
                          value={this.state.userName}
                          onChangeText={(value)=>{
                                this.setState({
                                   userName:value
                          })}}
                       />
                    </View>
                    <View style={styles.loginBox}> 
                       <Icon style={styles.loginIcon} name="lock"/>
                       <TextInput style={styles.loginInput}   placeholder={"请输入用户密码"} placeholderTextColor={"#aaa"} secureTextEntry={true}
                          value={this.state.passWord}
                          onChangeText={(value)=>{ 
                              this.setState({
                               passWord:value
                          })}}
                       />
                    </View>
                    
                </View>
                
                <TouchableHighlight onPress={this.login} 
                    style={{width:"96%",backgroundColor:"#489688",marginTop:50*sh,height:40*sh,borderRadius:3,shadowColor:"#8ac34b"}}  >
                    <Text   style={{textAlign:"center",height:40*sh,lineHeight:40*sh,fontSize:20*sf,color:"#fff"}}>登录</Text>
                </TouchableHighlight>
             </ImageBackground>
             
             <View style={styles.footer}>
                <Text >Copyright &copy; 2019 ZZNODE</Text>
             </View>
          </View>

        )

    }






}


const styles = StyleSheet.create({

    container:{

        flex:1,
        backgroundColor:"#fff"

    },
    bgImage:{
        
        flex:0.9,
        alignItems:"center"
    },
    login:{
        
        marginTop:100*sh,
        height:100*sh,
        backgroundColor:"#fff",
        width:"96%",
        
    },
    loginBox:{
        
        flexDirection:"row",
        height:50*sh,
        borderColor:"#ccc",
        borderWidth:1
        
    },
    loginIcon:{

        fontSize:30*sf,
        height:50*sh,
        lineHeight:45*sh,
        marginLeft:15*sw
        
    },
    loginInput:{
       
        width:"90%",
        fontSize:20*sf
    },
    user:{
        backgroundColor:"#fff",
        
    },
    footer:{

        flex:0.1,
        alignItems:"center", 
        justifyContent:"center"
    }



})

