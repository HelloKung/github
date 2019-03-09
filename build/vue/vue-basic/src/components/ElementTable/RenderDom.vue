<template>
    <div style="height:100%;width:100%; padding:10px 20px;">
      <el-button @click="go" size="mini" type="primary">go</el-button>
      <el-row style="height:90%">
        <ElementTable 
            :options="options"
            @HandleFunc="HandleFunc"
            @CellClick="CellClick"
            @ButtonFunc="ButtonFunc"
        >
        <template slot-scope="data" slot="age">
           <el-button  type="warning" size="mini" @click="val(data)">{{data.row.age}}</el-button>
        </template>  
        </ElementTable>
      </el-row>
    </div>
</template>




<script>

import ElementTable from './index.vue'

export default {
    
    data(){

        let  data = {

             
             options:{
                   
                   hasIndex:true,
                   hasSelect:true,
                   header:[{
                       name:"姓名",
                       key:"name"
                   },{
                       name:"年龄",
                       key:"age",
                       formatter:true
                   },{
                       name:"性别",
                       key:"sex"
                   },{
                       name:"城市",
                       key:"city",
                       fixed:"right"
                   },{
                       name:"等级",
                       key:"level",
                       width:1000
                   },{
                       name:"日期",
                       key:"date",
                       isDrill:true,
                       text:"查看详情",
                       fixed:"right"
                   }],
                   data:[{
                       name:"123",
                       date:"2018-09-22",
                       age:12
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:13
                   },{
                       name:"123",
                       date:"2018-09-22",
                       city:"沈阳",
                       age:14
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:12
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:15
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:14
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:11
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:18
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:20
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:19
                   },{
                       name:"123",
                       date:"2018-09-22",
                       age:16
                   },],
                   pagination:{
                      
                      pageIndex:1,
                      pageRowSize:10,
                      total:20
                   },
                   button:[{
                       id:"topo",
                       name:"查看拓扑"
                   },{
                       id:"export",
                       name:"导出",
                       export:true,
                       option:{
                           url:"",
                           params:{

                           },
                           fileName:""
                       }
                   },],
                   selectOption:"",
             }
            

             
    
        }


        return data;

    },
    components:{
        ElementTable
    },
    methods:{

        HandleFunc(type,val){

           console.log(type,val);  

        },
        CellClick(type,val){
           
           console.log(type,val);  

        },
        ButtonFunc(id,isexport){

          console.log(id,isexport)

        },
        go(){

           this.options.pagination.pageIndex=2

        },
        val(param){
            
            console.log("调用了")
        
            console.log("调用了:",param)
        
        }


    },
    mounted(){

        
    }


}
</script>
