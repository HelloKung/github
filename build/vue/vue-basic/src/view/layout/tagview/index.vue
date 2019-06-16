<template>
    <div class="tag-container">
        
        <div class="home">
            <router-link  
                tag="div"
                v-if="homeMenuConfig!=null"
                :class="{'active':activeViewId == homeMenuConfig.id}" 
                :to="homeMenuConfig.id"
                @contextmenu.prevent.native="openMenu(homeMenuConfig.id,$event)"
            >
                <!-- <el-tooltip popper-class="tag-home-tips" :content="homeMenuConfig.title" placement="bottom" effect="light"> -->
                   <div class="icon-home" @click="selectTag(homeMenuConfig.id)"></div>
                <!-- </el-tooltip> -->
                
  
            </router-link>
        </div>
        <div class="scrollbar">
            <scroll-pane ref="scrollPane" class="scrollbar-tags-container"> 
                <router-link  tag="div"
                
                    v-for="item in tagViewList"
                    class="tag"
                    :class="{'active':activeViewId == item.id}" 
                    :key="item.id"
                    :to="item.id"
                    @contextmenu.prevent.native="openMenu(item.id,$event)"
                >   
                    <div class="tag-content" @click="selectTag(item.id)">
                        <div class="title">{{$t(item.name)}}</div>
                        <div class="el-icon-circle-close icon" @click.prevent.stop="closeTag(item.id)"></div>
                    </div>
                </router-link>
            </scroll-pane>
        </div>    
        <div class="collect-list-container">
            <el-dropdown>
                <el-button type="primary"  size="mini">
                    <i class="el-icon-star-on el-icon--left"></i>{{$t("收藏夹")}}
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        tag="div"
                        v-for="(item,index) in collect_list"
                        :key="item.id"
                    >
                        <router-link  
                           :to="item.id"
                           
                           tag="div"
                        >
                           <div class="box-100" @click="selectTag(item.id)">{{$t(item.name)}}</div>
                        </router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="closeTag(selectedTag)">关闭当前</li>
            <!-- $t() -->
            <li @click="closeOtherTag(selectedTag)">关闭其他</li>
            <!-- $t('') -->
            <li @click="closeAllTag">关闭全部</li>
        </ul>
    </div>

</template>



<script>

import ScrollPane from "@/components/ScrollPane"; 


export default {
    
    data(){

        return {

            visible: false,
            top: 0,
            left: 0,
            selectedTag: null,
            collect_list:[{
                name:"表格封装",
                id:"ElementTable"
            },{
                name:"钻取地图",
                id:"drillmap"
            }]

        }


    },
    methods:{


        openMenu(id, e) {

            this.visible = true;
            this.selectedTag = id;
            const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
            this.left = e.clientX - offsetLeft + 200; // 15: margin right
            this.top = e.clientY + 5;
        },
        closeMenu() {
            
            this.visible = false
        
        },
        closeTag(id){

            this.$store.dispatch("closeTagView",id).then(routeId => {
                
                if(routeId!=null){

                    this.selectTag(routeId);
                    this.$router.push(routeId);
                
                }
            })

        },
        closeOtherTag(id){

            this.$store.dispatch("closeOtherTagView",id).then(routeId => {
                
                if(routeId!=null){

                    this.selectTag(routeId);
                    this.$router.push(routeId);
                }
            })

        },
        closeAllTag(){
            
            this.$store.dispatch("closeAllTagView").then(routeId => {
                
                if(routeId!=null){
                    
                    this.selectTag(routeId);
                    this.$router.push(routeId);
                }
            })
        
        },
        selectTag(id){
            
            this.$store.dispatch("selectTagView",id).then(res =>{
                
                this.$store.dispatch("setSiderMenu",this.activefirstMenuId);
                
            })

        },
         


    },
    components:{

       ScrollPane
    
    },
    computed:{
        
       tagViewList(){

           return this.$store.state.tagview.tagViewList;

       },
       activeViewId(){

           return this.$store.state.tagview.activeViewId;
       },
       activefirstMenuId(){

           return this.$store.state.menu.activefirstMenuId;
       },
       homeMenuConfig(){

           return this.$store.state.menu.homeMenuConfig;
       }

    },
    mounted(){


        
    },
    watch:{

        visible(value) {

            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }

    }




}
</script>


<style lang="less" scoped>
   
   .tag-container{

      width: 100%;
      height: 30px;
      background: #5b646b;
      box-sizing: border-box;
      border-top:1px solid #5b646b;
      .home{

        height:100%;
        width: 40px;
        text-align: center;
        line-height: 30px;
        background: #009688;
        color: #fff;
        box-sizing: border-box;
        box-shadow:0px 0px 1px #49af4d inset;
        //border:1px solid rgba(255,255,255,0.4);
        border-bottom: none;
        cursor: pointer;
        float: left;
        div{

            height: 100%;
            line-height: 30px;

        }
      }
      .active{

        background: #49af4d;
        transform: ease-in-out 2s all;
      }
      .scrollbar{
          width: calc(100% - 140px);
          height: 100%;
          float: left;
          position:relative;
          padding:2px 5px;
          .scrollbar-tags-container{

              width:100%;
              height:100%;
              position:relative;
              .tag{
                   
                   min-width: 100px;
                   max-width: 200px;
                   height:24px;
                   font-size: 10px;
                   line-height: 24px;
                   margin-left: 6px;
                   float:left;
                   color: #fff;
                   background: #009688;
                   box-shadow:0px 0px 1px #333;
                   box-sizing: border-box;
                   padding:0 10px;
                   cursor: pointer;
                   .tag-content{
                       width:100%;
                       height:100%;
                       .title{

                       float: left;
                    }
                    .icon{
                        color:#fff;
                        float: right;
                        height: 24px;
                        line-height: 26px;
                    }
                    .icon:hover.el-icon-circle-close:before{
                        content:"\e79d"
                    }
                   }
                   
              }
              .active{
                  background: #49af4d;
                  transform: ease-in-out 2s all;
              }
            }
        }
        .collect-list-container{
            min-width:80px; 
            max-width: 100px;
            padding-right:6px;
            float: right;
            .el-dropdown{
                float: right; 
                &>button{
                    height:24px;
                    min-width:80px; 
                    max-width: 100px;
                    line-height: 22px;
                    padding: 0px 10px;
                }

            }
        }

        .contextmenu {
            margin: 0;
            background: #fff;
            z-index: 100;
            position: absolute;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
                li {
                    margin: 0;
                    padding: 7px 16px;
                    cursor: pointer;
                &:hover {
                    background: #eee;
                }
            }
        }
   }

  
   

</style>


<style>
    .tag-home-tips{
     
      min-width: 54px;
      text-align: center;
      letter-spacing:2px;
     
   }
</style>
