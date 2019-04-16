
import React, {Component} from "react";
import { View,Text } from "react-native"
import { WebView } from "react-native-webview"
import { width,height } from "../public/AdapterUtil"
import Button from "../../node_modules/react-native-button";

export default class WebViews extends Component {


    constructor(props){

        super(props) 


    }
    componentWillMount(){

        
    }
    render(){

        return(
    
            <View style={{flex:1}}>
                    <WebView
                        source={{uri: this.props.navigation.state.params.url}}
                        style={{height,width}}
                    />
                    
            </View>
        
    )

    }
 

}

