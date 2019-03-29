<template>
    <div class="box-100 pad-20">
        
        <el-card class="box-card" style="margin-top:20px;">
            <div slot="header" class="clearfix">
                <span>请求接口</span>
            </div>
            <div>{{list}}</div>
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

            this.getListTable();  
 
            this.fileUpload();

        },
        getListTable(){

           
            queryApi.getListData().then(res => {

                this.list = res;
            })

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
