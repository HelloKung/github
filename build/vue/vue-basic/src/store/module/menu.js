import { getSession, setSession} from '@/utils/session';
import headerConfig from '@/config/layout/headerConfig';
import siderConfig from '@/config/layout/siderConfig';


const store = {

     state:{
        
        activefirstMenuId:null,
        siderMenu:[],
        rootMenuId:"",//侧边栏基础ID
        headerMenuConfig:null,//头部菜单配置
        isCollapse:false,
        homeMenuConfig:null,//所有菜单根目录 -- home 菜单
     },
     mutations:{

        setSiderMenu(state,{siderMenu,firstMenuChange}){////设置侧边栏

            state.siderMenu = siderMenu;
            
            if(firstMenuChange){ 

               setSession("activeSiderMenuId",getRootMenu(siderMenu[0]).id);

               state.rootMenuId = getRootMenu(siderMenu[0]).id;

            }else{

              state.rootMenuId = getSession("activeSiderMenuId");
            }   
            
        },
        setActiveFirstMenuId(state,firstMenuId){/////设置header顶部菜单

            state.activefirstMenuId = firstMenuId;

            setSession("activefirstMenuId",firstMenuId);
        },
        SET_ISCOLLAPSE(state){

            state.isCollapse = !state.isCollapse;
        },
        SET_HOME_MENU_CONFID(state){

            state.homeMenuConfig = getRootMenuConfig(siderConfig[0].siderMenu);

        },
        SET_HEADER_MENU_CONFIG(state){

            state.headerMenuConfig = headerConfig.menu;
        },
        SET_ACTIVE_HEADER_MENUID(state){

            state.activefirstMenuId =  getSession("activefirstMenuId")?
                                 getSession("activefirstMenuId"):state.headerMenuConfig[0].id;
          
        }
          

     },
     actions:{

        setSiderMenu({commit,state},headerMenuId){   ///头部切换发生变化时改变侧边栏菜单;


            if(siderConfig.some(item => item.firstMenuId == headerMenuId)){
               
               let siderMenu = siderConfig.filter(item => item.firstMenuId == headerMenuId)[0].siderMenu;

              
               let firstMenuChange = !(headerMenuId == getSession("activefirstMenuId"));
            
               commit("setActiveFirstMenuId",headerMenuId) 
   
               commit("setSiderMenu", { siderMenu,firstMenuChange });
   

            }

           
          

        },
        setActiveSiderMenuId({commit},activeSiderMenuId){  ///缓存当前行动菜单ID;

           setSession("activeSiderMenuId",activeSiderMenuId)
         
        },
        renderMenu({commit}){  ///刷新后初始化菜单


           commit("SET_HOME_MENU_CONFID");  ///设置home菜单

           commit("SET_HEADER_MENU_CONFIG");

           commit("SET_ACTIVE_HEADER_MENUID");
           

       
        },
       



     }


};

export function getRootMenu(list){

    if(list.children&&list.children.length>0){

          return getRootMenu(list.children[0])

    }

    return list;
}

export function getRootMenuConfig(list){  ///获得home菜单路径

    for(let i=0 ; i<list.length;i++){

        if(list[i].children&&list[i].children.length>=1){

           return getRootMenuId(list[i].children);
         

        }else{

           return  list[i]
          
           break; 

        }   
     
    }

}




export default store
