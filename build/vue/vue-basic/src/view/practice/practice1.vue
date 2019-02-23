<template>
   <div style="width:100%;height:100%">
    <!-- <el-container>练习1</el-container>
    <el-container>
        <li v-for="item in NameList">
            {{item.name}}{{item.value}}
        </li>
    </el-container> -->
        <!-- <div id="top_panel"  style="width:100px;height:100px;background:#ddd; "></div>
        <div id="left_panel" style="width:100px;height:100px;background:#ff0;"></div>
        <div id="center_panel" style="width:100px;height:100px;background:#abc; left:220px; top:0px; "></div>
        <div id="bottom_panel" style="width:100px;height:100px;background:#cba;"></div>
        <div id="center_panel" style="width:100px;height:100px;background:#ad1;"></div> -->
        <!-- <el-button @click="kkk">borderPane</el-button>
   <iframe src="static/iframe.html?123" style="width:100%;height:50%;border:1px solid #000"></iframe>  -->
   <el-button type="primary" @click="createSvg">创建SVG</el-button>
   <svg width="100%" height="100%" version="1.1"  xmlns="http://www.w3.org/2000/svg" v-html="svgStr"/>




   </div>
</template>




<script>

    export default{

         data(){

             let data={

                  NameList:[
                        {name:"name1",value:1},
                        {name:"name2",value:2},
                        {name:"name3",value:3},
                        {name:"name4",value:4},
                        {name:"name5",value:5},
                      ],
                  svgStr:""

             } 


             return data;


         },
         methods:{

              createSvg(){
                
         
                    
              }




         }


        
    }


</script>