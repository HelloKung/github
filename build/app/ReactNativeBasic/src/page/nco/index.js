import React, {Component, PropTypes} from "react";
import { View,Text } from "react-native"
import { WebView } from "react-native-webview"
import { NavigationActions,withNavigation } from "react-navigation"
import Button from "../../../node_modules/teaset/components/Button/Button";
class Nco extends Component {



    render(){

        return(<View style={{flex:1}}>
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20,borderColor:"#ff0000",borderWidth:1,height:100}}
            />
            <Button title="go" onPress={()=>{

                    this.props.navigation.navigate('WebView')
            }}/>
            <Text>割接页</Text>
        </View>)

    }
 

}

export default withNavigation(Nco)
