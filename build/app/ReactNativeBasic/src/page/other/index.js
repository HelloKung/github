import React, {Component, PropTypes} from "react";
import {View, Image, Text,ScrollView} from "react-native";
import { Header,Button,Badge,Card, ListItem,CheckBox,Divider,PricingCard,SearchBar } from 'react-native-elements'
import Echarts from 'native-echarts'



export default class Home extends Component {
    
    state = {

        text:"这个一个按钮",
        checked:true
    }
    
    HandleClick = (name) => {
          
        alert(1);

        this.setState({
            text:"我点击了"+name,
         
        })

    }

    render(){

        const option = {
            title: {
                text: 'ECharts demo'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
          }; 

          const data = [[
            [0, 1],
            [1, 3],
            [3, 7],
            [4, 9],
          ]];
         

         return (
 
            <ScrollView>
               <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
               /> 
               {/* <SearchBar
                    onChangeText={someMethod}
                    onClearText={someMethod}
                    placeholder='Type Here...' 
               /> */}
               <Button
                    large
                    rightIcon={{name: 'code'}}
                    title='LARGE WITH RIGHT ICON' 
                    onPress={()=>{this.HandleClick('abv')}}
               />
               <Card title="CARD WITH DIVIDER">
                    <CheckBox
                        center
                        title='Click Here'
                        checked={this.state.checked}
                        onPress={()=>{
                            this.setState({
                                checked:!this.state.checked
                            })
                        }}
                    />
                    <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                    />
                    <Divider style={{ backgroundColor: 'blue' }} />
                    <PricingCard
                        color='#4f9deb'
                        title='Free'
                        price='$0'
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    />
               </Card>
               <Echarts option={option} height={300} />
               <Text>{this.state.text}</Text>
             </ScrollView>

         )


    }



}