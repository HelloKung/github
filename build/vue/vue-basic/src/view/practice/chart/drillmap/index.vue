<template>
    <div class="drillmap-main box-100 pad-20">
       <div class="box-100"> 
            <el-row :span="24" class="title">
                <div v-for="item in title" :key="item.id">
                    <div v-if=" item.id!='china' ">></div>
                    <div @click="TitleHandleClick(item)" style="cursor:pointer">{{item.name}}</div>
                </div>
            </el-row>
            <el-row class="content">
             
                <component  
                     :is="mapComponents" 
                     v-model="option" 
                     @click="handleClick"
                ></component>
               
            </el-row>
       </div> 
    </div>
</template>


<script>

import axios from 'axios';
import echarts from 'echarts';

import chinaMap from "./china";
import provinceMap from "./province";
import cityMap from "./city"

export default {

      data(){

          let data = {

              title:[{
                  id:"china",
                  name:"全国",
                  level:"china"
              }],
              titlelist:[{
                  id:"china",
                  name:"全国",
                  level:"china"
              },{
                  level:"province"
              },{
                  level:"city"
              },{
                  level:"district"
              }],
              map:null,
              mapComponents:"chinaMap",
              mapid:"china",
              option:{
                  id:"",
                  name:"",
                  level:""
              }
          }

          return data; 
      },
      components:{
          chinaMap,
          provinceMap,
          cityMap
      },
      tooltip:{},
      methods:{

         handleClick({id,name,level}){

              //console.log("handleClick",id,name,level)

              if(level == "province") {

                  this.mapComponents = "provinceMap";

                  this.titlelist = this.titlelist.map(item => {

                       if(item.level == "province"){

                            item.id = this.option.id;
                            item.name = this.option.name;
                            
                       }else if(item.level == "city"||item.level == "district") {

                            item.id = "";
                       }

                       return item;  

                  })

                  this.title = this.titlelist.filter(item => item.id!="");

              } else if(level == "city") {

                  this.mapComponents = "cityMap";

                  this.titlelist = this.titlelist.map(item => {

                       if(item.level == "city"){

                            item.id = this.option.id;
                            item.name = this.option.name;
                            
                       }else if(item.level == "district") {

                            item.id = "";
                       }

                       return item;  

                  })

                  this.title = this.titlelist.filter(item => item.id!="");

              } else if(level == "district") {

                  this.titlelist = this.titlelist.map(item => {

                       if(item.level == "district"){

                            item.id = this.option.id;
                            item.name = this.option.name;
                            
                       }

                       return item;  

                  })

                  this.title = this.titlelist.filter(item => item.id!="");

              }
         
         },
         TitleHandleClick(item){

              this.option = item;

              if(item.level == "china") { this.title = this.title.filter((item,index) => index < 1); this.mapComponents = "chinaMap";}
              if(item.level == "province") { this.title = this.title.filter((item,index) => index < 2); this.mapComponents = "provinceMap";}
              if(item.level == "city") { this.title = this.title.filter((item,index) => index < 3); this.mapComponents = "cityMap";}
              if(item.level == "district") { this.title = this.title.filter((item,index) => index < 4); this.mapComponents = "cityMap";}
              
              console.log(this.title);
         }

      },
      mounted(){

         

      }


}

</script>


<style scoped>

.drillmap-main > div{

    background-color: #3f4b59;
    color: #f5d149;

}

.title{

    height: 40px;
    line-height: 30px;
    font-size: 18px;
    padding: 5px 10px; 
}
.title > div{
   
    width: 100%;

}
.title > div >div{
   
    margin-left: 10px;
    display: inline-block;
    float:left;
}
.content{
    
    height: calc(100% - 40px);
    width: 100%;
}

</style>
