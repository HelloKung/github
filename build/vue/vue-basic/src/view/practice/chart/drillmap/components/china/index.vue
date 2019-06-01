<template>
    <div class="box-100">
       <div class="box-100" ref="chart"></div>
    </div>
</template>


<script>

import axios from 'axios';
import echarts from 'echarts';


export default {
      
      name:"china",
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
      tooltip:{},
      methods:{

          MapRender(region,mapList){

             echarts.registerMap(region, mapList); 
 
             let option = {

               
                   geo: {
                        map: 'china',
                        label: {

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

               

                   this.$emit("click",{id:mapid,name:param.name,level:"province"})
             });
          }


      },
      beforeDestroy() {
       
        if (!this.map) {
        return
        }
        this.map.setOption({});
        this.map.dispose()
        this.map = null
      },
      mounted(){

          this.map = echarts.init(this.$refs["chart"]);

          axios.get("static/echart/map/echart-map/json/china.json").then(res => {
            
             this.MapRender('china',res.data);

          })


          

      },
      


}

</script>



