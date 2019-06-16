<template>
    <div class="language-container">
        <el-dropdown class="box-100 box-center">
            <svg class="language-icon" aria-hidden="true">
               <use xlink:href="#iconyuyanfanyi"></use>
            </svg>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in languagelist" :key="index">
                    <div

                        class="box-100" 
                        @click="changeLanguage(item.value)"
                        :style="{'color':activelang == item.value?'#fcaf41':'#000'}"
                    
                    >{{item.name}}</div>
                </el-dropdown-item>
                
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>


<script>
export default {
    
    data(){

        return {

            languagelist:[{
                name:"中文",value:"zh"
            },{
                name:"English",value:"en"
            },{
                name:"日本語",value:"jp"
            }],
            activelang:"zh" 


        }


    },
    methods:{

        changeLanguage(language){

            this.activelang =  language;

            this.$i18n.locale = language;
 

        }
        


    },
    mounted(){




    }



}
</script>


<style lang="less" scoped>
    .language-container{

        float: right;
        width:50px;
        height:100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .language-icon{
          
            width: 38px;
            height: 38px;
            cursor: pointer;
            fill: currentColor;
            overflow: hidden;
            margin-top:1px;

        }
        
    }
</style>

