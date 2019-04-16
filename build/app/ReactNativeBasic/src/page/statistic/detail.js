import React,{Component} from "react";
import { View,Text,ScrollView,FlatList,StyleSheet,Image,TouchableHighlight,TouchableOpacity,RefreshControl } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"

import queryApi from "../../api/statistic"
import { NavigationActions } from 'react-navigation'
// import { TouchableHighlight } from "react-native-gesture-handler";

export default class Detail extends Component{

   constructor(props){

      super(props)

      this.navigation = this.props.navigation; 

      this.state = {

          ListData:[],
          Total:0,
          refreshing:false 

      }

      
   }
   componentWillMount(){

      //console.warn(this.props)

      this.getListData();
      

   }
   getListData = () =>{
       
        this.setState({refreshing: true}); 
        
        queryApi.getListData(this.props.tabLabel).then((res)=>{

            this.setState({
                ListData:res.items,
                Total:res.total_count,
                refreshing: false
            })

        })


   }
   
   renderItem = ({item}) =>{

     

       return (
            <TouchableOpacity 
               style={styles.container}
               onPress={()=>{

                    this.props.onSelect(item.html_url);

               }}
            >
             <View style={styles.item}>
                <Text style={[styles.title,{marginBottom:2}]}>{item.full_name}</Text>
                <Text style={{marginBottom:2}}>{item.description}</Text>
                <View style={[styles.bottom,{flex:1,justifyContent:"space-between"}]}>
                    <View style={styles.bottom}>
                        <Text>Author: </Text>
                        <Image 
                            style={{height:20,width:20}}
                            source={{uri:item.owner.avatar_url}}
                        />
                    </View>
                    <View style={styles.bottom}>
                        <Text>Stars: {item.stargazers_count}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableHighlight onPress={
                            ()=>{alert(1)}
                        }>
                            <Icon name="staro" color="#fcaf41" size={20}/>
                        </TouchableHighlight>
                    </View>
                </View>
             </View>     
            </TouchableOpacity> 

       )


   }
   render(){

       return (
               <ScrollView
               
                refreshControl = {
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={() => this.getListData}
                    />
                }
               
               >
                  <FlatList
                  
                     data={this.state.ListData}
                     renderItem={this.renderItem}
                     keyExtractor={(item, index) => item.id+""}
                     style={{margin:10}}
                     
                  />
               </ScrollView>
               )



   }

}



const styles = StyleSheet.create({

    container:{

         flex:1

    },
    item:{
        
         borderColor:"#ccc",
         borderWidth:1,
         padding:10,
         marginBottom:10,
         borderRadius:3,
         shadowColor:"#ccc",
         shadowOffset:{
             width:0.5,height:0.5
         },
         shadowOpacity:0.4,
         shadowRadius:1,
         elevation:2,
         
         

    },
    title:{
         fontSize:16,
         color:"#333"
    },
    bottom:{
         
         flexDirection:"row",
         alignItems:"center"
    }




})