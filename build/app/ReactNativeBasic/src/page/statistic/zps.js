import React, {Component, PropTypes} from "react";
import { View,Text,Picker,StyleSheet,FlatList,WebView,ScrollView  } from "react-native"
import { Button } from "react-native-elements"
import  DatePicker  from "react-native-datepicker"
import  Chart from "native-echarts"


export default class Find extends Component {

    state={
 
        date:"2019-01-01",
        option:{},
        tabledata:{

           header:[{
              key:"city",
              name:"地市",
              width:120
           },{
              key:"value",
              name:"摘牌数",
              width:120
           }],
           data:[
               {key:"1", city: '长沙' , value: parseInt(Math.random()*80+20)}, 
               {key:"2", city: '株洲' , value: parseInt(Math.random()*80+20)},
               {key:"3", city: '湘潭' , value: parseInt(Math.random()*80+20)},
               {key:"4", city: '衡阳' , value: parseInt(Math.random()*80+20)},
               {key:"5", city: '邵阳' , value: parseInt(Math.random()*80+20)},
               {key:"6", city: '岳阳' , value: parseInt(Math.random()*80+20)},
               {key:"7", city: '常德' , value: parseInt(Math.random()*80+20)},
               {key:"8", city: '张家界' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '益阳' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '娄底' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '郴州' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '永州' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '怀化' , value: parseInt(Math.random()*80+20)},
               {key:"9", city: '湘西州' , value: parseInt(Math.random()*80+20)},
               
           ]
       

        }
        
    }
    componentWillMount(){

       this.getOption();

    }
    handleClick = () => {

        this.getOption();


    }
    getOption = () => {
      
      let date = this.state.date;

      this.setState({

           option:{
                grid:{
                    right:10
                },
                title:{
                    text: date + " 当日摘牌数",
                    top:10,
                    
                },
                xAxis: {
                    type: 'category',
                    data: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德','张家界','益阳','娄底','郴州','永州','怀化','湘西州'],
                    axisLabel:{
                       interval:0,
                       rotate:50 
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]

           }

      })


    }
    renderHeader = () => {

       let result = this.state.tabledata.header;

       

       return (
         <View style={styles.header}> 
             {
                result.map((item,index) => {
                   
                        return (

                            <Text style={{
                            
                                    borderColor:"#fff",
                                    borderWidth:1,
                                    textAlign:"center",
                                    minWidth:item.width, 
                                    height:30,
                                    lineHeight:30,
                                    color:"#fff",
                                    flex:index != result.length - 1?0:1
                                    
                            }} key={item.key} >{item.name}</Text>
                    
                        ) 
                   
                })
             }
         </View>
       
      )

    }
    renderRow = ({item,index}) => {
        
        let  data = item;
       
        let  head = this.state.tabledata.header;

        result = Object.keys(data);
         
       
        return (
        
                  <View style={{flexDirection:"row",flex:1}}>

                     {

                         result.map((item,index) => {
                            
                             if( head.some(h => h.key == item))
                             return (
                               
                                <Text 
                                
                                    style={{

                                        borderColor:"#fff",
                                        borderWidth:1,
                                        textAlign:"center",
                                        minWidth:head.filter(elem => elem.key == item)[0].width, 
                                        height:30,
                                        lineHeight:30,
                                        color:"#333",
                                        backgroundColor:"#eee",
                                        flex:index != result.length - 1?0:1
                                    }}
                                    key={item} 
                                
                                >
                                   {data[item]}
                                </Text>
                             )

                         }) 

                     }
 
                    
                    
                  </View>
                
               )

    }
    render(){

        return(
        
            <ScrollView style={{flex:1,backgroundColor:"#fcfcfc",padding:10}}>
               <View style={styles.selectView}> 
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        format="YYYY-MM-DD"
                        confirmBtnText="确定"
                        cancelBtnText="取消"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderRadius:3,
                                height:36
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => {  this.setState({date: datetime});  } }
                    />
                    <Button title="查询" 
                        onPress={()=>{this.handleClick()}} 
                        buttonStyle={{width:80,height:36}}
                    />
              </View>  
              <Chart option={this.state.option} height={300} style={{width:"100%"}} />

              <FlatList
                 data={this.state.tabledata.data}
                 style={styles.tableStyle}
                 renderItem={(item) => this.renderRow(item)}
                 ListHeaderComponent = { () => this.renderHeader()}
              />

                
            </ScrollView>
            
        )

    }
 

}


const styles = StyleSheet.create({
     
    selectView:{

        flexDirection:"row",
        justifyContent:"space-between"   

    },
    header:{
       
        backgroundColor:"#4789dc",
        flexDirection:"row"
    },
    headercell:{
        borderColor:"#fff",
        borderWidth:1,
        textAlign:"center"
    },
    tableStyle:{
        marginBottom:40
    },
    cell:{


    }

})