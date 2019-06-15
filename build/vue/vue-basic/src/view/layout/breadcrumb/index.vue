<template>
    <div class="breadcrumb-container">
        <div class="icon-stack icon "></div>
        <div class="breadcrumb-content">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item 

                v-for="(item,index) in path"
                :key = index
                
                >
                {{item.title}}  
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="collect-container">
            <div class="icon-star-empty" :class="{'active':collect_active}" @click="collect"></div>
        </div>
    </div>
</template>



<script>

import headerConfig from "@/config/layout/headerConfig.js";
import siderConfig from "@/config/layout/siderConfig.js";


export default {

    data(){

       return {

           path:[],
           curMenuId:"",
           collect_active:false

       }
    
    },
    methods:{

       renderbreadCrumb(){


            this.curMenuId = this.$route.name;

            this.getbreadCrumbPath(siderConfig,this.curMenuId,[],"",0);
           


       },
       getbreadCrumbPath(list,MenuId,path,indexlist,level){
            
            for(const [index,item] of list.entries()){

 
                    if(item.id == MenuId){

                        let title = item.title;
                        let id = item.id;
                        indexlist = indexlist + "," + index;
                        path.push({title,level,index:indexlist,id});
                        this.path = path;
                        this.filterPathList();
                        break;

                    }
                   
                    if(item.siderMenu){

                        let title = headerConfig.menu.filter(v =>v.id == item.firstMenuId)[0].title;
                        let id = item.firstMenuId;
                        indexlist = indexlist != ""? indexlist + "," + index  : index;
                        path.push({title,level,index:indexlist,id});
                        this.getbreadCrumbPath(item.siderMenu,MenuId,path,indexlist,level+1);

                    }

                    if(item.children){

                        let title = item.title;
                        let id = item.id;
                        indexlist = indexlist + "," + index;
                        path.push({title,level,index:indexlist,id});
                        this.getbreadCrumbPath(item.children,MenuId,path,indexlist,level+1);

                    }
                
                
            }   

       },
       filterPathList(){

           let  curPath = this.path.filter(item => item.id == this.curMenuId)[0];
       
           let  path = [];

           for(let i = 0 ;i<curPath.level ;i++){


                path.push(this.path.filter((item)=>{

                    return (item.index+"").split(",")[i] == curPath.index.split(",")[i];

                })[0]) 



           }
          
           path.push(curPath);

           this.path = path;

       },
       collect(){

           this.collect_active = !this.collect_active;

       }



    },
    mounted(){

        this.renderbreadCrumb();


    },
    watch:{

        $route(){

            this.renderbreadCrumb();

        }


    }
    
    
}
</script>


<style lang="less" scoped>

    .breadcrumb-container{

        width:100%;
        height:30px;
        background: #687177;
        color:#fff;
        padding-right:10px;
        .icon{

            float:left;
            height: 100%;
            line-height: 30px;
            width: 40px;
            text-align: center;

        }
        .breadcrumb-content{
            float:left;
            height: 100%;
            margin-left:14px;
            .el-breadcrumb{

                height: 100%;
                line-height:  30px;
                
            }
        }
        .collect-container{

            float: right;

        }
        .collect-container{
         
            color:#fff;
            float: right;
            height: 100%;
            line-height:  30px;
            &>div{

               height: 100%;
               line-height:  30px; 
               cursor:pointer;
               &:hover{
                   color: #ffd04b;
               }
            }
            .active:before{
              
               content:'\e9d9';
               color: #ffd04b;
                
            }
        }
    }


</style>


<style>

 
    .breadcrumb-container  .el-breadcrumb__inner{
                     
        color: #fff !important;   
        font-size:12px;

    }


</style>
