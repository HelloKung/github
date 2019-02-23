import React, {Component, PropTypes} from "react";
import { View,Text } from "react-native"
import { Button }  from "teaset"
import { AppRegistry,AsyncStorage } from "react-native"
import { Select } from 'teaset'

export default class Find extends Component {

    constructor(props){

       super(props);

       this.state = {

          value:0, 
          selectvalue:"Apple"
       }
       
       this.items = [
        'Apple',
        'Banana',
        'Cherry',
        'Durian',
        'Filbert',
        'Grape',
        'Hickory',
        'Lemon',
        'Mango',
      ];

    }



    HandleClick = () => {

       alert(1);
    }

    render(){

        return(<View>
            <Text>123</Text>
            <Button title="触发事件" onPress={() => this.HandleClick()} />
            <Select
                style={{width: 200}}
                value={this.state.selectvalue}
                items={this.items}
                placeholder='Select item'
                pickerTitle='Default'
                onSelected={(item, index) => this.setState({selectvalue: item})}
            />
        </View>)

    }
 

}

