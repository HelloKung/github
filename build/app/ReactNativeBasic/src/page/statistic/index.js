import React, {Component, PropTypes} from "react";
import { View,Text,ScrollView,StyleSheet,TouchableHighlight } from "react-native"
import { Header,Badge } from 'react-native-elements'
import { width,sw,sh } from "../../public/AdapterUtil"
import Icon from "react-native-vector-icons/AntDesign"
import { NavigationActions } from 'react-navigation';
import { Actions } from 'react-native-router-flux'


export default class Statistic extends Component {

    state = {

        important:[{
            name:"挂牌数",
            num:45,
            icon:"areachart"
        },{
            name:"摘牌数",
            num:25,
            icon:"book",
            key:"zps"
        },{
            name:"工单数",
            num:35,
            icon:"barchart"
        }],
        normal:[{
            name:"光缆段未用数",
            num:45,
            icon:"areachart"
        },{
            name:"地市隐患景区数",
            num:25,
            icon:"book"
        },{
            name:"OLT带宽利用率占比",
            num:35,
            icon:"barchart"
        },{
            name:"PTN环网带宽利用率占比",
            num:35,
            icon:"barchart"
        },{
            name:"传输设备性能劣化隐患占比",
            num:35,
            icon:"barchart"
        },{
            name:"ONU弱光占比",
            num:35,
            icon:"barchart"
        }]
    }


    constructor(props){

        super(props)
       
      

    }
    componentWillMount(){


        


    }
    
    HanderClick = (key) => {
  
        
        if(key == "zps" ){

            Actions.zps();
  
        }else{

            alert("功能待开发")

        }
        
    }
    renderboxItem = (type) => {
       
        //console.warn(this.state);
        let list = this.state[type];

        return list.map((item,index) => { 

            return (

                <TouchableHighlight style={styles.boxItem} key={item.name} onPress={() => {this.HanderClick(item.key)}}>
                    <View style={styles.boxItemView}>   
                        <Badge value={item.num} badgeStyle={styles.badgeStyle}/>
                        <Icon name={item.icon} color={"#fff"} size={40} style={styles.boxItemIcon}/> 
                        <Text style={styles.boxItemTitle}>{item.name}</Text>
                    </View>
                </TouchableHighlight>  

            )

        }) 
    }




    render(){

        return(
        
            <View  style={{flex:1}}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: '传输性能分析', style: { color: '#fff',fontSize:20 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor={"#333"}
                    containerStyle={{
                        
                        justifyContent: 'space-around',
                        alignItems:"center"
                    }}
                />
                <ScrollView >
                   <Text style={styles.title}>重点指标</Text>
                   <View style={styles.box}>
                       {this.renderboxItem("important")}
                   </View> 
                   <Text style={styles.title}>常用指标</Text>
                   <View style={styles.box}>
                       {this.renderboxItem("normal")}
                   </View> 
                </ScrollView>
                
            </View>
        
        )

    }
 

}






const styles = StyleSheet.create({

    title:{

        height:40,
        fontSize:20,
        lineHeight:40,
        backgroundColor:"#1365a7",
        color:"#fff",
        paddingLeft:20,
        borderWidth:1,
        borderColor:"#fff"
        
    },
    box:{

        alignItems:"flex-start",
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        width:width

    },
    boxItem:{

        backgroundColor:"#51a0e7",
        width:width/4,
        height:width/4,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#fff",
        borderWidth:1,
        paddingTop:20*sh

    },
    boxItemView:{

        alignItems:"center",
        justifyContent:"center",

    },
    badgeStyle:{
       
        position:"absolute",
        left:5*sw,
        top:-5*sh,
        zIndex:100,
        backgroundColor:"#4caf50"
    },
    boxItemIcon:{
        
    },
    boxItemTitle:{

        color:"#fff",
        fontSize:16,
        textAlign:"center",
        height:40,
        marginTop:10*sh
        // borderWidth:1,
        // borderColor:"#0f0"
       
    },
    



})