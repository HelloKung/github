import React, {Component, PropTypes} from "react";
import { View,Text } from "react-native"
import { Button }  from "teaset"
import { AppRegistry,AsyncStorage,TouchableOpacity } from "react-native"
import { Select } from 'teaset'
import ImagePicker from 'react-native-image-picker';
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

    //选择图片
    selectPhotoTapped(){
        const options = {
            title: '选择图片', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '选择照片', 
            customButtons: [
                {name: 'fb', title: 'Choose Photo from Facebook'},
              ],
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high', 
            durationLimit: 10, 
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8, 
            angle: 0,
            allowsEditing: false, 
            noData: false,
            storageOptions: {
                skipBackup: true  
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
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
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                <Text>选择图片</Text>
            </TouchableOpacity>
        </View>)

    }
 

}

