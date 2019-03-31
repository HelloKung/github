import { getSession, setSession} from '@/utils/session'


const store = {

     state:{
        
        activefirstMenuId:null,
        siderMenu:[],
        rootMenuId:"",

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
        }
          

     },
     actions:{

        setSiderMenu({commit,state},param){

           
            let firstMenuChange = !(param.firstMenuId == getSession("activefirstMenuId"));
            
            commit("setActiveFirstMenuId",param.firstMenuId) 

            commit("setSiderMenu", { siderMenu:param.siderMenu,firstMenuChange });


        },
        setActiveSiderMenuId({commit},activeSiderMenuId){

           setSession("activeSiderMenuId",activeSiderMenuId)
         
        }



     }


};

function getRootMenu(list){

    if(list.children&&list.children.length>0){

          return getRootMenu(list.children[0])

    }

    return list;
}



export default store
