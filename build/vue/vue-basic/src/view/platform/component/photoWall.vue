<template>
    <div class="container box-100 pad-20">
        <div class="title">最近更新</div>
        <div class="phote-group">
            <el-row style="margin-bottom:20px;" class="photo" :gutter="20">
                <el-col :span="12" >
                    <img class="box-100" :src="imgsrc1"/>
                </el-col>
                <el-col :span="12" >
                    <img class="box-100" :src="imgsrc2"/>
                </el-col>
            </el-row>
            <el-row  :gutter="20" class="photo">
                <el-col :span="12" >
                    <img class="box-100" :src="imgsrc3"/>
                </el-col>
                <el-col :span="12" >
                    <img class="box-100" :src="imgsrc4"/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>



<script>
export default {

    data(){

       let data = {
            
            imgsrc1:require("@/assets/img/platform/photo1.png"),
            imgsrc2:require("@/assets/img/platform/photo2.png"),
            imgsrc3:require("@/assets/img/platform/photo3.png"),
            imgsrc4:require("@/assets/img/platform/photo4.png"),
            

       }

       return data; 

    },
    methods:{



    },
    mounted(){



    }

    
}
</script>


<style lang="less" scoped>

    .container{

        height: 600px;
        background: #fff;
        border-radius:3px;
        box-shadow:1px 1px 10px #ccc;
        padding: 5px 15px;
        .title{

           padding: 5px;
           height:36px;
           width: 100%;
       }
       .phote-group{

           width:100%;
           padding:5px;
           height: calc(100% - 36px);
           .photo{
               height: calc(50% - 23px);
               &>div{
                 
                    height: 100%;
                    img{
                        
                        border-radius: 3px;
                    
                    }
               }
               
           }
       }
    }




</style>
