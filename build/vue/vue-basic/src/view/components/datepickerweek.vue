<template>
    <div class="el-date-editor">

        <el-date-picker
            v-model="date_week"
            type="week"
            :format= option.format
            :style="{width:option.width+'px'}"
            placeholder="选择周" :size= option.size  @change="getNewWeek">
        </el-date-picker>
        
        <!-- <datepickerweek :option="week_option" @formatvalue="formatweek"></datepickerweek> -->
        <!-- week_option:{
                width:150,
                size:"small",
                format:"yyyy 第 WW 周"
            } -->
        <!-- formatweek 的 val 是["",""]     -->

    </div>
</template>




<script>

import moment from 'moment'


export default {
    
    data(){

        let data = {

              date_week:"",



        }

        return data;

    },
    model:{

       prop:"value",
       event:"formatvalue"

    },
    props:{
        
        option:{
             
            default:()=>({
                
                size:"small",
                width:150,
                format:"yyyy 第 WW 周"

            })


        },
        value:""
        
    },
    methods:{

       getNewWeek(){

           this.$emit("formatvalue",this.new_week)  

       }

    },
    computed:{

        new_week(){
              
              console.log(this.date_week)
            
              return  this.date_week==null?"":moment(this.date_week).format('YYYY-MM-DD')+","+moment(this.date_week).add(6,'days').format('YYYY-MM-DD')
        }


    }



}
</script>
