<template>
    <div>
      这是登陆页面
      <el-button type="primary" size="small" @click="login">登录</el-button>
    </div>
</template>

<script>
export default {

      data(){

         var data={   
             
             name:"kkkk"
          
         }

         return data
      },
      methods:{
           
           login(){

              this.$router.push({ path: '/layout' })
              
               
           },
           addRoutes() {
          
         


           }
       
      },
      created(){
         
                    // this.$store.commit('increment')

         console.log(this.$store.state.router)
         
         console.log(this.$store.getters.doneTodos)
      },
      mounted(){

         this.addRoutes();
               
      }

}
</script>



<style>
</style>