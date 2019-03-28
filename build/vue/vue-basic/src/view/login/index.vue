<template>
    <div class="login-main">
      
      <login-particle></login-particle>

      <div class="login-content">

          <div class="login-title">用 户 登 录</div>
   
          <el-form ref="form" :model="form"  :rules="rules">
            
            <el-form-item prop="username">
                <div class="icon-user input-icon"></div>
                
                <el-input
                      v-model="form.username" 
                      class="icon-input" 
                      placeholder="请输入用户名" 
                      autocomplete="on"
                      clearable
                ></el-input>
            </el-form-item> 

            <el-form-item prop="password">
                <div class="icon-lock input-icon"></div>
                <el-input 
                      v-model="form.password" 
                      class="icon-input" 
                      placeholder="请输入用户密码" 
                      clearable 
                      show-password
                      autocomplete="on"
                      @change="passwordChange"
                >
                </el-input>
            </el-form-item>  

            <el-form-item prop="checkcode">
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

import queryApi from '@/api/login'

export default {

      data(){

         var data={   
             
             form:{

                 username:"",
                 password:"",
                 checkcode:""
             },
             checkcode:parseInt(Math.random()*8999+1000),
             rules: {
                username: [
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 10, max: 15, message: '长度在 10 到 15 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' }
                ],
                checkcode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ]

             }
          
         }

         return data
      },
      components:{
          loginParticle
      },
      methods:{
           
           login(){

              this.$refs["form"].validate(valid => {

                   if(valid){

                        this.$store.dispatch("LoginByUserName",this.form).then(res => {

                                
                                this.$router.push({ path: "/layout" })
                                
                        })

                   }     

               }) 

   
           },
           passwordChange(){

               this.form.password = this.$base64.encode(this.form.password);

           }
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
