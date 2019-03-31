<template>
    <div class="box-100 pad-20">
        
        <el-card class="box-card" style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
                <span>请求接口</span>
            </div>
            <div>{{list}}</div>
        </el-card>

        <el-card class="box-card" style="margin-bottom:20px;">
            <div slot="header" class="clearfix">
                <span>leaflet离线地图 -- node 请求链接数据库请求的地图瓦片- 沈阳市地图 8~12 级地图 </span>
            </div>
            <div style="width:100%;height:400px;" ref="lxmap"></div>
        </el-card>
        <!-- <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>请求接口</span>
            </div>
            <div>
               <el-row>
                  <el-col :span="2">  
                    <el-upload
                        class="upload-demo"
                        action=""
                        multiple
                        :limit="3"
                        ref="upload"
                        :http-request="uploadSectionFile"
                        >
                        <el-button size="small" type="primary">选择文件</el-button>
                    </el-upload>
                  </el-col>
                  <el-col :span="2">
                    <el-button type="success" size="small" @click="fileUpload">上传文件</el-button>
                  </el-col>
               </el-row>
            </div>
        </el-card> -->
    </div>
</template>


<script>

import queryApi from "@/api/practice/node";

import 'leaflet/dist/leaflet.css'

import * as L from 'leaflet' 

export default {
    
    data(){

         let data = {

              list:"请求未成功",
              filelist:[]
         }
       
         return data;
 
    },
    methods:{

        init(){


            this.lxmapRender();
            this.getListTable();  
 
            //this.fileUpload();

        },
        getListTable(){

           
            queryApi.getListData().then(res => {

                this.list = res;
            })

        },
        lxmapRender(){

 
           //queryApi.getMapTitle().then(res => { });  

            
           let url_normal = "http://localhost:3000/practice/table/node/getMaptitle?type=1818940751&zoom={z}&x={x}&y={y}";
           let glayer_normal = new L.TileLayer(url_normal, { 
                                        minZoom: 8, 
                                        maxZoom: 12, 
                                        attribution: '普通地图' 
                               });
          
          
          
           let latlng = new L.LatLng(41.8041,123.4259);

           let  southWest = [41.1911,122.3163],//地图西南点坐标
                northEast = [43.0448,124.0082],//地图东北点坐标
                bounds = L.latLngBounds(southWest, northEast);//地图边界 


           let map = new L.Map(this.$refs["lxmap"], { 
                                       center: latlng, 
                                       zoom: 12,
                                       layers:[glayer_normal],
                                       maxBounds:bounds
                              });

          


        },

        // uploadSectionFile(param){
        //     console.log(param)
        //     this.filelist.push(param.file)
        // },
        // fileUpload(){


            
        //     let formData = new FormData();
        //     for(let i=0;i<this.filelist.length;i++){
        //        formData.append("file",this.filelist[i])
        //     }

        //     queryApi.fileUpload(formData).then( res => {

        //          this.$message({
        //              message:"上传成功",
        //              type:"success"
        //          })

        //     })


        // } 



    },
    mounted(){

        
         this.init();

        

    }



}
</script>


<style scoped>
   
   .box-card{

      margin-top: 10px;

   }

</style>
