import { getSession, setSession} from '@/utils/session'
import headerConfig from '@/config/layout/headerConfig';
import siderConfig from '@/config/layout/siderConfig'
import menuStore,{getRootMenu} from './menu'


let ActiveTagOption = null; ///当前的tag属性
let FirstMenuId = null;  ///当前一级菜单属性



const store = {

     state:{
        
        tagViewList:[],
        activeViewId:null

     },
     mutations:{

        ADD_TAG_VIEW(state,MenuId){////添加头部标签
            

            state.activeViewId = MenuId;

            if(state.tagViewList.some(item => item.id == MenuId)||menuStore.state.homeMenuConfig.id == MenuId){
                return;
            }


            getActiveTagOptionById(MenuId,siderConfig);   ///获取当前option
            state.tagViewList.push({id:MenuId,name:ActiveTagOption.title}); //加入展示tag列表
            

        },
        DEL_TAG_VIEW(state,MenuId){////删除头部标签


          
            state.tagViewList = state.tagViewList.filter(item =>item.id!=MenuId);

        },
        DEL_OTHER_TAG_VIEW(state,MenuId){

            state.tagViewList = state.tagViewList.filter(item =>item.id==MenuId);

        },
        SEL_TAG_VIEW(state,MenuId){////选中当前标签

            
            getActiveTagOptionById(MenuId,siderConfig);

            
            menuStore.state.activefirstMenuId = FirstMenuId;
          
            menuStore.state.rootMenuId = MenuId;

             
        }    
     },
     actions:{

        addTagView({commit},MenuId){

            commit("ADD_TAG_VIEW",MenuId)

        },
        closeTagView({ commit,state },MenuId){

            let list = state.tagViewList;

            
            let curIndex = null;

            let routeId = null;

            for(let [i,v] of list.entries()){
                
                 if(v.id == MenuId ){
                     curIndex = i;
                     break;
                 } 
            }
             
            if(list.length == 1){
                
                routeId = menuStore.state.homeMenuConfig.id;
                state.activeViewId = menuStore.state.homeMenuConfig.id;

            }else if(curIndex == 0){

                routeId = list.filter((item,index) => index == 1)[0].id;

            }else {

                routeId = list.filter((item,index) => index == curIndex - 1)[0].id;
            }
            

            commit("DEL_TAG_VIEW",MenuId);

            return new Promise((resolve,reject)=>{

                resolve(routeId);
            })

        },
        closeOtherTagView({ commit,state },MenuId){

            commit("DEL_OTHER_TAG_VIEW",MenuId);
            state.activeViewId = MenuId;

            return new Promise((resolve,reject)=>{

                resolve(MenuId);
            })

        },
        closeAllTagView({ commit,state }){

            state.tagViewList = [];
            state.activeViewId = menuStore.state.homeMenuConfig.id;
            
            return new Promise((resolve,reject)=>{

                resolve(menuStore.state.homeMenuConfig.id);
            })
        },
        selectTagView({commit},MenuId){

            commit("ADD_TAG_VIEW",MenuId);

            commit("SEL_TAG_VIEW",MenuId);
        },
        changeHeaderAddRootTagView({commit},FirstMenuId){ ///切换菜单把默认菜单加入
              
            let siderRootMenuId =  getRootMenuId(siderConfig.filter(item => item.firstMenuId == FirstMenuId)[0].siderMenu);
            
            console.log("siderRootMenuId",siderRootMenuId);

            commit("ADD_TAG_VIEW",siderRootMenuId)


        }
     

     }


};



export function getActiveTagOptionById(id,list,firstMenuId){

    for(let i = 0 ;i<list.length;i++){

        if(list[i].id == id){

            ActiveTagOption = list[i];
            FirstMenuId = firstMenuId;
            break;
        }
        
        if(list[i].siderMenu){

            getActiveTagOptionById(id,list[i].siderMenu,list[i].firstMenuId);
        }
        
        if(list[i].children){

            getActiveTagOptionById(id,list[i].children,firstMenuId);
        }

    } 


}

export function getRootMenuId(list){   ///根据侧边栏获得最底层菜单ID

    for(let i=0 ; i<list.length;i++){

        if(list[i].children&&list[i].children.length>=1){

           return getRootMenuId(list[i].children);
         

        }else{

           return  list[i].id
          
           break; 

        }   
       



    }


}






export default store
