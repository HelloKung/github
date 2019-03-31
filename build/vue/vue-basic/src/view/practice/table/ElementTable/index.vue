<template>
    <div style="height:100%;width:100%; padding:10px 20px;">
      <el-row style="height:100%">
        <ElementTable 
            v-model="options"
            @HandleFunc="HandleFunc"
            @CellClick="CellClick"
            @ButtonFunc="ButtonFunc"
        >
          <template slot-scope="data" slot="formatter">
             <el-button  type="warning" size="mini" @click="update(data)">修改</el-button>
             <el-button  type="danger" size="mini"  @click="del(data)">删除</el-button>
          </template>
          <template slot-scope="data" slot="sex">
             <span v-if="data.row.sex==1">男</span>
             <span v-else>女</span>
          </template>
          
        </ElementTable>
      </el-row>


      <!-- 钻取页面  -->
     
      <!-- <el-dialog 
         title="提示"
         :visible.sync="visible"
         width="80%"
         center
      >

          <span>123</span>

      </el-dialog> -->

    </div>
</template>




<script>

import axios from "axios";

import ElementTable from '@/components/ElementTable'



export default {
    
    data(){

        let  data = {

             visible:true,
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
                       key:"sex",
                       formatter:true
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
                        "objectid": "350000201010214610",
                        "name": "Paul Anderson",
                        "age": 9,
                        "sex": 2,
                        "city": "北京市",
                        "email": "m.altzwyes@fgi.coop",
                        "date": "2005-08-06"
                    },
                    {
                        "objectid": "150000198610164504",
                        "name": "Jeffrey Lopez",
                        "age": 2,
                        "sex": 1,
                        "city": "阜新市",
                        "email": "y.xyqarainlp@bgphq.gt",
                        "date": "1977-09-02"
                    },
                    {
                        "objectid": "220000199707101617",
                        "name": "Matthew Allen",
                        "age": 8,
                        "sex": 2,
                        "city": "西安市",
                        "email": "k.imyrzqhxz@fxaspvg.jo",
                        "date": "2014-01-30"
                    },
                    {
                        "objectid": "460000197212073744",
                        "name": "Laura Hernandez",
                        "age": 2,
                        "sex": 1,
                        "city": "双鸭山市",
                        "email": "k.tmz@icntbhomn.ug",
                        "date": "1980-07-12"
                    },
                    {
                        "objectid": "23000019880522444X",
                        "name": "Carol Thompson",
                        "age": 2,
                        "sex": 2,
                        "city": "鄂州市",
                        "email": "s.tccdeo@lbsoqqc.nu",
                        "date": "2006-05-01"
                    },
                    {
                        "objectid": "500000197112111718",
                        "name": "Deborah Perez",
                        "age": 8,
                        "sex": 1,
                        "city": "桂林市",
                        "email": "t.ftgzebri@lwsters.asia",
                        "date": "1977-03-03"
                    },
                    {
                        "objectid": "320000201404287366",
                        "name": "Jennifer Hernandez",
                        "age": 5,
                        "sex": 1,
                        "city": "香港岛",
                        "email": "e.paio@hakcb.tr",
                        "date": "1986-08-28"
                    },
                    {
                        "objectid": "410000200106294186",
                        "name": "Timothy Young",
                        "age": 5,
                        "sex": 2,
                        "city": "澎湖县",
                        "email": "f.pelgh@ogvmu.jp",
                        "date": "2000-07-28"
                    },
                    {
                        "objectid": "360000199604033739",
                        "name": "William Williams",
                        "age": 1,
                        "sex": 2,
                        "city": "离岛",
                        "email": "i.knryrg@nyhchepis.gd",
                        "date": "2015-02-07"
                    },
                    {
                        "objectid": "530000199210147591",
                        "name": "Kevin Martinez",
                        "age": 3,
                        "sex": 2,
                        "city": "黄石市",
                        "email": "x.mckoexya@nxmwmkt.sm",
                        "date": "1983-09-26"
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
        update(data){

           console.log(data);

        },
        del(){



        }


    },
    mounted(){

        this.getListTableData(); 
        console.log(this.$store)
    }


}
</script>
