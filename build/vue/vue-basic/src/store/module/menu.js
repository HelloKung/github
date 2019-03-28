import {setSession} from '@/utils/session'


const store = {

     state:{
        
        activefirstMenuId:null,
        siderMenu:[],
        rootMenuId:"",

     },
     mutations:{

        setSiderMenu(state,siderMenu){

            state.siderMenu = siderMenu;
            
            state.rootMenuId = getRootMenu(siderMenu[0]).id;

            //setSession("activeSiderMenuId",getRootMenu(siderMenu[0]).id);
        
        },
        setActiveFirstMenuId(state,firstMenuId){

            state.activefirstMenuId = firstMenuId;

            setSession("activefirstMenuId",firstMenuId);
        }
          

     },
     actions:{

        setSiderMenu({commit,state},param){

           
            commit("setActiveFirstMenuId",param.firstMenuId)
            commit("setSiderMenu",param.siderMenu);
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
