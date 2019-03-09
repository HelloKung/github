<template>
   <div style="width:100%;height:100%">
 
      <el-row class="page-table" >
            
            <el-table :data="list_table.data"   @selection-change="List_handleSelectionChange" ref="multipleTable" height="100%" >
                    
                    <!-- 序号列 -->
                    
                    <el-table-column  v-if="list_table.hasIndex"  label="#" min-width="60" align="center">
                        <template slot-scope="scope">
                            {{scope.$index+(list_table.pagination.pageIndex - 1) * list_table.pagination.pageRowSize + 1}}
                        </template>
                    </el-table-column>
                    

                    <!-- 选择列 -->

                    <el-table-column  v-if="list_table.hasSelect"  width="60" align="center" type="selection"></el-table-column>


                    <el-table-column  
                        v-for="(item, index) in list_table.header"
                        :property="item.key" 
                        :label="item.name"  
                        :key="item.key" align="center" 
                        :min-width="item.width?item.width:150" 
                        :fixed="item.fixed?item.fixed:false" 
                        show-overflow-tooltip >
                        <template slot-scope="scope"  >
                            <template v-if="!item.formatter">
                                <template v-if="!item.isDrill">{{list_table.data[scope.$index][item.key]}}</template>
                                <template  v-else>
                                    <el-button v-if="!item.text" type="text" size="mini" @click="CellClick(item.key,scope.row)">{{list_table.data[scope.$index][item.key]}}</el-button>
                                    <el-button v-else type="text" size="mini" @click="CellClick(item.key,scope.row)">{{item.text}}</el-button>
                                </template>
                            </template>    
                            <template  v-else>
                                <slot  :name="item.key" :scope="scope" :row="scope.row"></slot>
                            </template>
                        </template>

                    </el-table-column>
                    



            </el-table>


       </el-row>       
       <el-row class="page-function">
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
          <div class="function-button">
            
            <el-button v-for="item in list_table.button"  :key="item.id"  type="primary" size="mini" @click="ButtonFunc(item.id,item.export)">{{item.name}}</el-button>

          </div>
       </el-row>


   </div>
</template>



<script>
export default {
 
     data(){
         
        let data = {


            list_table:{
                   
                   hasIndex:false,
                   hasSelect:false,
                   header:[],
                   data:[],
                   pagination:{
                      
                      pageIndex:1,
                      pageRowSize:10,
                      total:0
                   },
                   button:[],
                   selectOption:"",
            }, 

        }
        
        return data;
     },
     model:{

         prop:"value",
         event:"ModelValue"

     },
     props:{
         options:{

             default:() => ({
 
                   hasIndex:false,
                   hasSelect:false,
                   header:[],
                   data:[],
                   pagination:{
                      
                      pageIndex:1,
                      pageRowSize:10,
                      total:0
                   },
                   button:[],
                   selectOption:"",
              })

         },
         value:""

     },
     methods:{
        
        List_handleSelectionChange(val){
          
           this.HandleFunc("handleSelectionChange",val);

        },
        List_handleSizeChange(val){

          this.HandleFunc("handleSizeChange",val); 

        },  
        List_handleCurrentChange(val){

          this.HandleFunc("handleCurrentChange",val);

        },
        ListExportAllData(){


        },
        HandleFunc(type,val){

           this.$emit("HandleFunc",type,val)

        },
        CellClick(type,val){
           
           this.$emit("CellClick",type,val)

        },
        ButtonFunc(id,isexport = false){

          this.$emit("ButtonFunc",id,isexport)

        },
        ModelValue(){

          this.$emit("ModelValue",this.list_table);  
        }

     },
     mounted(){

         this.list_table = this.options
     },
     watch:{

         options:{
　　　　　　　　
　　　　　　　　handler(val,oldVal){
                
                this.list_table = this.options
　　　　　　　　
               },
　　　　　　　　deep:true
　　　　　}
   


     }


}
</script>


<style scoped>

.page-table{

    height: calc(100% - 50px);

}

.page-function{

    height: 50px;
    padding: 10px 0px;
}

.page-function  .function-button{
   
           float: right;
}

</style>
