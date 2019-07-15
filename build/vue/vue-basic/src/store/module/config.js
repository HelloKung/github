

const store = {

    state:{

        siderbarDrag:false,  ///侧边栏可以拖拽 
        headerbgColor:"#545c64",
        siderbgColor:"#545c64"

    },
    mutations:{
      
        SET_HEADER_BGCOLOR(state,color){

            state.headerbgColor = color;

        },
        SET_SIDER_BGCOLOR(state,color){

            state.siderbgColor = color;

        },
        SET_SIDERBAR_DRAG(state,drag){

            state.siderbarDrag = drag;

        }


    },
    actions:{
        
        setHeaderBgColor({commit},color){

            commit("SET_HEADER_BGCOLOR",color);

        },
        setSiderBgColor({commit},color){

            commit("SET_SIDER_BGCOLOR",color);

        },
        setSiderbarDrag({commit},drag){

             
            commit("SET_SIDERBAR_DRAG",drag);
             
           
        }


    }


}



export default store;