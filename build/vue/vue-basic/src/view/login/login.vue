<template>
    <div class="login-main">
      
      <login-particle></login-particle>

      <div class="login-content">

          <div class="login-title">用 户 登 录</div>
   
          <el-form ref="form" :model="form" >
            
            <el-form-item >
                <div class="icon-user input-icon"></div>
                
                <el-input
                      v-model="form.username" 
                      class="icon-input" 
                      placeholder="请输入用户名" 
                      clearable
                ></el-input>
            </el-form-item> 

            <el-form-item >
                <div class="icon-lock input-icon"></div>
                <el-input 
                      v-model="form.password" 
                      class="icon-input" 
                      placeholder="请输入用户密码" 
                      clearable 
                      show-password
                >
                </el-input>
            </el-form-item>  

            <el-form-item >
                <div class="icon-keyboard input-icon"></div>
                <el-input 
                      v-model="form.checkcode" 
                      class="icon-input login-checkcode-input" 
                      placeholder="请输入验证码"
                ></el-input>
                <div class="login-checkcode">{{checkcode}}</div>
            </el-form-item> 

            <el-form-item class="login-button">
                <el-button type="primary" size="small"  @click="login">登  录</el-button>
            </el-form-item>  
        
        </el-form>  

      </div>

      
    </div>
</template>

<script>

import loginParticle from '@/components/loginParticle/index.vue';

export default {

      data(){

         var data={   
             
             form:{

                 username:"",
                 password:"",
                 checkcode:""
             },
             checkcode:parseInt(Math.random()*8999+1000)
          
         }

         return data
      },
      components:{
          loginParticle
      },
      methods:{
           
           login(){

              this.$router.push({ path: '/layout' })
              
               
           },
      },
      
      mounted(){

           
               
      }

}
</script>



<style scoped>

.login-main{

  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
}

.login-title{

   margin-bottom: 20px;
   text-align: center;
   color:#fff;
   font-size:18px;
}


.login-content{

    width:400px;
    height:320px;
    padding:20px 30px;
    background:rgba(50,50,50,0.4);
    border:1px solid #000;
    border-radius:3px;
    box-shadow:0px 0px 5px;
}

.input-icon{

    width: 40px;
    height:40px;
    line-height: 40px;
    color: #000;
    position: absolute;
    top:0px;
    left:0px;
    font-size:16px;
    z-index: 10;
    text-align: center;
    /* border-right: 1.5px solid #333; */
}


.login-content .el-form-item{

    position: relative;
    
}

.login-button{
    text-align: center;
}

.login-button button{
    width: 100%;
    height:40px;
    font-size:16px;
}

.login-checkcode-input{

    width:200px;
    display: inline-block;
}

.login-checkcode{

    display: inline-block;
    height:30px;
    background: #fff;
    border:1px solid #ccc;
    width:80px;
    text-align:center;
    line-height: 30px;
    border-radius: 3px;
    float:right;
    margin-top:5px;
}


</style>

<style>

  
.icon-input .el-input__inner{

    padding:0px 40px !important;
}

</style>
