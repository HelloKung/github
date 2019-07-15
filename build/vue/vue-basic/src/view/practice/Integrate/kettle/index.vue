<template>
    <div class="pad-20 box-100" >
        <el-divider content-position="left">kettle</el-divider>
    
        <el-row>
            <div style="display:inline-block;">请求bat脚本数据</div>
            <el-button type="primary" @click="HandleClickRunBat" size="mini">执行</el-button>
        </el-row>
        


    </div>
</template>



<script>

import queryApi from "@/api/practice/kettle";


export default {
    
    data(){

        return {



        }

    },
    methods:{

        HandleClickRunBat(){

             this.$message({

                    type:"info",
                    message:"开始执行"
             })
            
             this.loading = true;

             queryApi.HandleClickRunBat().then(res => {

                this.loading = false;  

                this.$message({

                    type:"success",
                    message:res.data
                })


             }).catch(err => {


                this.loading = false;

             })

        }


    },
  
    mounted(){


    }

}
</script>
