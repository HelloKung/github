<template>
    <div style="height:100%;width:100%; padding:10px 20px;">
      <el-row style="height:100%">
        <ElementTable 
            v-model="options"
            :options="options"
            @HandleFunc="HandleFunc"
            @CellClick="CellClick"
            @ButtonFunc="ButtonFunc"
        >
        <template slot-scope="data" slot="formatter">
           <el-button  type="warning" size="mini" @click="update(data)">修改</el-button>
           <el-button  type="danger" size="mini"  @click="del(data)">删除</el-button>
        </template>  
        </ElementTable>
      </el-row>
    </div>
</template>




<script>

import axios from "axios";

import ElementTable from '@/components/ElementTable'



export default {
    
    data(){

        let  data = {

             
             options:{
                   
                   hasIndex:true,
                   hasSelect:true,
                   header:[{
                       name:"姓名",
                       key:"name",
                       isDrill:true
                   },{
                       name:"年龄",
                       key:"age"
                   },{
                       name:"性别",
                       key:"sex"
                   },{
                       name:"城市",
                       key:"city",
                   },{
                       name:"邮箱",
                       key:"email",
                       width:200
                   },{
                       name:"日期",
                       key:"date",
                   },{
                       name:"操作",
                       key:"formatter",
                       formatter:true,
                       fixed:"right",
                       width:200
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
                   }],
                   pagination:{
                      
                      pageIndex:1,
                      pageRowSize:10,
                      total:20
                   },
                   button:[{
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

           if(type == "handleCurrentChange" || type == "handleSizeChange"){

                 this.getListTableData();
           }

        },
        CellClick(type,val){
           
           console.log(type,val);  

        },
        ButtonFunc(id,isexport){

          console.log(id,isexport)

        },
        getListTableData(){

            axios.post("https://www.easy-mock.com/mock/5c80cdfe761c94306e4ad8c6/github/vue/elementtable/getListTableData",{

            }).then(res => {

                this.options.data = res.data.data;
            })

        },
        update(){



        },
        del(){



        }


    },
    mounted(){

        this.getListTableData(); 
        
    }


}
</script>
