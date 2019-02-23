<template>
    <div>
       
        <el-table :data="list_table.data"  @selection-change="List_handleSelectionChange" ref="multipleTable" height="100%">
            <el-table-column   label="#" min-width="60" align="center">
                <template slot-scope="scope">
                    {{scope.$index+(list_table.pagination.pageIndex - 1) * list_table.pagination.pageRowSize + 1}}
                </template>
            </el-table-column>
            <el-table-column  :property="item.prop" :label="item.label" v-for="(item, index) in list_table.columns" :key="item.key" align="center" :min-width="item.width?item.width:150" show-overflow-tooltip >
               <template slot-scope="scope" > 
                    <template v-if="!item.render" >
                        <span >{{list_table.data[scope.$index][item.prop]}}</span>
                    </template>
                    <template v-else  >
                        <div v-html="item.render()"></div>
                    </template>
               </template> 
            </el-table-column>
        </el-table>
        <el-pagination
                background
                style="float:left"
                @size-change="List_handleSizeChange"
                @current-change="List_handleCurrentChange"
                :current-page="list_table.pagination.pageIndex"
                :page-sizes="[5, 10, 20, 30, 50, 100, 200]"
                :pager-count=5
                :page-size="list_table.pagination.pageRowSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="list_table.pagination.total">
          </el-pagination> 




    </div>
</template>
<script>
export default {

    data(){

       let data = {

           list_table:{

              
              columns:[{

                   prop:'id',
                   label:"编号",
                   width:60

              },{

                   prop:'operation',
                   label:"操作",
                   width:60,
                   render:()=>{
                       
                        return `<el-button type="text" >123</el-button>`
                                    


                   }

              }],
              data:[{
                 id:"a",
                 operation:"o1"
              },{
                 id:"b",
                 operation:"o2"
              },{
                 id:"c",
                 operation:"o3"
              },{
                 id:"d",
                 operation:"o4"
              },{
                 id:"e",
                 operation:"o5"
              }],
              pagination:{
               
                 pageIndex:1,
                 pageRowSize:10,
                 total:25
              }

           }
           

       }
       
       return data;

    },
    methods:{
         
         List_handleSelectionChange(){


         },
         List_handleSizeChange(){


         },
         List_handleCurrentChange(){


         },
         ListTable_Detail(){


         }
    
    }
    
}
</script>
