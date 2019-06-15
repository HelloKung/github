<template>
    <div class="headertip-container">
        <el-badge :value="200" :max="99" class="item box-100" is-dot type="warning"> 
            <div class="headertip-icon-container">
                <div class="icon-yelp"></div>
            </div>
        </el-badge>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    
    .headertip-container{

        height: 100%;
        width:50px;
        float: right;
        padding:10px;
        margin-right: 10px;
        
        .headertip-icon-container{
           
           background: #2196f3;
           width:100%;
           height:100%;
           border-radius: 3px;
           color: #fff;
           box-sizing: 0px 0px 10px #00bcd4;
           cursor: pointer;
           &>div{
              
              height: 30px;
              line-height: 30px;
              
              text-align: center;
           }
           &:hover{
              
              background: #fff;
              color: #2196f3;

           }
        }

    }


</style>


