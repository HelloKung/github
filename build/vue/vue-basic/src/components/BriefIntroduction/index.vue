<template>
    <div  class="box-100">
        <div 
            
            class="brief box-100"
            :style="{'background': 'linear-gradient(to right,'+background+')'}"
        
        >
            <div  class="brief-top">
                <div class="brief-icon" :class="[icon]"></div> 
                <div class="brief-title">
                    <div class="brief-name">{{title}}</div>
                    <div class="brief-count">
                        <count-to :start-val="0" :end-val="count" :duration="2000"  />{{unit}}
                    </div>
                </div>    
            </div>   
            <div class="brief-center">
                <div class="brief-progress-value">
                    <count-to :start-val="0" :end-val="percent" :duration="3000"  />%
                </div> 
                <div class="brief-progress">
                    <el-progress :percentage="percent" :show-text="false" :color="'#000'"></el-progress>
                </div> 
            </div>    
            <div class="brief-bottom"> 
                <div class="icon-calendar"></div>   
                <div>更新日期：{{date}}</div>
            </div>   
        </div>
    </div>
</template>


<script>

import CountTo from 'vue-count-to';
import moment from 'moment';

export default {
    
    data(){

        let data = {

             date:""

        } 
         
        return data;

    },
    props:[
        "title",
        "count",
        "unit",
        "percent",
        "icon",
        "background"
    ],
    components:{

        CountTo
    },
    methods:{


        renderItem(){


              this.date = moment().format("YYYY-MM-DD")


        }



    },
    mounted(){


        this.renderItem();
    }

}
</script>


<style lang="less" scoped>

    
    .brief{

        background: #fff;
        box-shadow:1px 1px 10px #ccc;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        padding:5px 10px;
        color:#fff;
        transition: ease-in-out 0.1s all;
        .brief-top{
            display: flex;
            flex-direction: row;
            align-items:center;
            justify-content: space-between;
            height: 60px;
            .brief-icon{
                width: 40px;
                height:40px;
                font-size: 30px;
                display: flex;
                flex-direction: row;
                align-items:center;
                justify-content: center;
            }
            
            .brief-title{
                margin-right:10px;
                display: flex;
                align-items:flex-end;
                flex-direction: column;
                .brief-name{

                    font-weight: bold;
                    font-size: 16px;
                }
                .brief-count{
                    margin-top:6px;
                    font-size: 14px;
                }
            }
        }
        .brief-center{
            
            margin-top:4px;
            padding-right: 10px;
            .brief-progress-value{
                width: 100%;
                text-align: right;
                margin-bottom:4px;
                font-size: 14px;
            }
            .brief-progress{
                margin-top:10px;
            }
        }
        .brief-bottom{
            
            padding-right: 10px;
            margin-top: 20px;
            width: 100%;
            font-size: 14px;
            text-align: right;
            display: flex;
            align-items:center;
            justify-content: flex-end;
            flex-direction: row;
            &>div{
                margin-left:10px;
            }
        }
    }
    .brief:hover{
        margin-top:-4px;
        transition: ease-in-out 0.1s all;
    }




</style>

<style>
   
   .brief .el-progress-bar__outer{

        background: #fff;
    }
   
</style>