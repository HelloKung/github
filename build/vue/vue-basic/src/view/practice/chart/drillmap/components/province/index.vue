<template>
    <div class="box-100">
       <div class="box-100" ref="chart"></div>
    </div>
</template>


<script>

import axios from 'axios';
import echarts from 'echarts';


export default {
      
      name:"province",
      data(){

          let data = {
 
              map:null
 
          }

          return data; 
      },
      model:{

         prop:"option",
         event:"click"

      },
      props:{
          option:{

            //   default:() => ({
            //       id:"",
            //       name:"",
            //       level:""
            //   })

          }
      },
      tooltip:{},
      methods:{

          MapRender(region,mapList){

             echarts.registerMap(region, mapList); 
 
             let option = {

               
                   geo: {
                        map: region,
                        label: {
                            
                            // show: true,
                            // color:"#fff"
                            
                        },
                        itemStyle: {
                            
                            areaColor: '#323c48',
                            borderColor: '#111'
                            
                        },
                        emphasis:{

                            label:{
                                 
                                show:true,
                                color:"#fff"

                            }
                        }
                        
                    },




             }

             this.map.setOption(option);
             this.map.off("click");
             this.map.on("click",(param)=>{
                   
                   
                   let mapid = mapList.features.filter(item => item.properties.name == param.name)[0].properties.id; 
                   this.$emit("click",{id:mapid+"00",name:param.name,level:"city"})
             
             });
          }


      },
      mounted(){

          this.map = echarts.init(this.$refs["chart"]);
           
     

          axios.get(`static/echart/map/echart-map/json/${this.option.id}.json`).then(res => {
            

             this.MapRender(this.option.name,res.data);

          })


          

      },
      watch:{
       
          option:{
　　　　　　　　
　　　　　　　　handler(val,oldVal){
                
                
                 axios.get(`static/echart/map/echart-map/json/${val.id}.json`).then(res => {
                    
                    
                    this.MapRender(val.id,res.data);

                })
　　　　　　　　
               },
　　　　　　　　deep:true
　　　　　}


      }


}

</script>



