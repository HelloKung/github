<template>
   <div class="main" >
      <el-container>这是表格1页面  </el-container>
      <el-container  >
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            :height="300"
            style="position:relative"
            @selection-change="handleSelectionChange" v-perfect-scroll:true>
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="120" >
               <template slot-scope="scope">
                   {{scope.row.date}}  
               </template> 
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            label="地址"
            show-overflow-tooltip >
              
                 <template slot-scope="scope">
                 
                  <template v-if="scope.row.edit">
                     <el-input v-model="scope.row.address" size="small" style="width:240px;"></el-input>
                     <el-button type="success" size="mini" >cancel</el-button>
                  </template>
                  <template v-else>{{ scope.row.address }}</template>
                </template> 

            </el-table-column>
            <el-table-column label="操作" width="1500">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>


                    
                    <el-button  v-if="scope.row.edit"
                    size="mini"
                    type="success"
                    @click="scope.row.edit=!scope.row.edit">编辑成功</el-button>

                    <el-button  v-else
                    size="mini"
                    type="warning"
                    @click="scope.row.edit=!scope.row.edit">行内编辑</el-button>



              </template>
            </el-table-column>
        </el-table>
      </el-container>
      <el-container >
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>    
      </el-container> 
 
      <datepickerweek v-model="w_value"  @formatvalue="getWeekValue"></datepickerweek>
      {{WeekValue}}{{"w_value:"+w_value}}
  

   </div>    
</template>
<style lang="less" scoped>
.list{
    position:relative;
    /*不写高度说明高度自适应，既然高度都无限了根本就不会出现滚动条*/
    height:100px;
    width: 100px;
    border: 1px solid #000
}

.list >li{

  width: 200px;
}


</style>

<style>

.el-table__body-wrapper:hover .ps__rail-x{
  opacity: 1;
}
</style>



<script>

import datepickerweek from '@/view/components/datepickerweek'



 export default {
    data() {
      return {
        WeekValue:"",
        w_value:"",
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          edit:false,
        }],
        multipleSelection: [],
        currentPage: 1
      }
    },
    components:{
      datepickerweek
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {

        this.multipleSelection = val;
      
      },
      handleEdit(index,row){

         console.log(index,row);

      },
      handleDelete(index,row){

         console.log(index,row);
      },
      handleCurrentChange(){

         console.log("改变表格页码")

      },
      handleSizeChange(){
   
         console.log("改变表格长度")

      },
      getWeekValue(val){
           this.WeekValue = val;
      }

    }
  }
</script>

<style >


   

</style>