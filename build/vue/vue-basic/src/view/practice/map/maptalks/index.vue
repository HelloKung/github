<template>
    <div class="box-100 pad-20">
       <div id="map" ref="container" class="box-100"></div>
    </div>
</template>



<script>



import * as maptalks from "maptalks";



import echarts from "echarts";

import {E3Layer} from "maptalks.e3";


export default {

    data(){

        let data = {
              
              map:null

        }

        return data;
    },
    methods:{

        init(){
             
            this.map = new maptalks.Map('map', {
                    center: [123.4259,41.8041],
                    zoom: 11,
                    minZoom : 8, 
                    maxZoom : 12,
                    baseLayer: new maptalks.TileLayer('base', {
                    urlTemplate: 'http://localhost:3000/practice/table/node/getMaptitle?type=1818940751&zoom={z}&x={x}&y={y}',
                    subdomains: ['a','b','c'],
                    })
            });

            this.map.setMaxExtent(this.map.getExtent()); ///设置边界

            this.map.setPitch(40);  ///设置旋转尺寸

           
            
        
        }

    },
    mounted(){


        this.init();



    }
   

    
}
</script>


<style>
  
  .maptalks-attribution {

     display: none;

  }
</style>
