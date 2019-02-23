<template>
    <div>这是测试页

      <router-link to="/test1">测试1</router-link>
      <router-link to="/test2">测试2</router-link>
      <el-button size="mini" type="warning" @click="changeRouter">go</el-button>
      <router-view></router-view>


    </div>



</template>
<script>
export default {
     


     methods:{

        changeRouter(){


           this.$router.push({ path: '/table1' })
        }
     }


}
</script>
