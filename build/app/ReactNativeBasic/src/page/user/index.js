import React, {Component, PropTypes} from "react";
import { View,Text } from "react-native"
import { Button } from "teaset"
import { AsyncStorage } from "react-native"

export default class User extends Component {


    loginOut(){

     

        AsyncStorage.setItem("login","false");

        AsyncStorage.getItem("login").then((data)=>{

            console.warn("user",data);
        })

    }

    render(){

        return(<View>
            <Text>用户页</Text>
            <Button title={"注销用户"} onPress={
                this.loginOut
            }></Button>
        </View>)

    }
 

}

