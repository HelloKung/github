
const store = {

     state:{

        siderMenu:[],
        rootMenuId:"",

     },
     mutations:{

        setSiderMenu(state,siderMenu){

            state.siderMenu = siderMenu;
            
            state.rootMenuId = getRootMenu(siderMenu[0]).id;
        
        }
          

     },
     actions:{

        setSiderMenu({commit,state},param){

            commit("setSiderMenu",param.siderMenu);
 
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
