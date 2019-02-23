// Reducer 数据处理

import {type} from "./../action"

 const initialState = {
    menuName:"首页",
    isCollapse:false,
    TagsViewList:{
        basic:{
            name:"首页",
            path:"/layout/home"
        },
        all:[{
            name:"首页",
            path:"/layout/home",
            active:true
        }]
    }
}


export default (state = initialState ,action ) =>{
    
    //console.log(state,action)

    switch (action.type) {

        case type.SWITCH_MENU:
            return {
                 ...state,
                 menuName:action.menuName
            } 
            break;    
        case type.COLLAPSE:
            return {
                 ...state,
                 isCollapse:action.isCollapse
            }
            break;
        case type.addTag:{
            
            let TagsViewList = {};

            ///判断是否存在路由/Tag
            if(!initialState.TagsViewList.all.some(item => item.path==action.TagsViewElem.path))
                 initialState.TagsViewList.all.push(action.TagsViewElem);
            
            ///指向选中路由
            
            initialState.TagsViewList.all = 
                  initialState.TagsViewList.all.map(item => {item.active = false; return item;})
                  .map(item => { if(item.path==action.TagsViewElem.path) item.active = true; return item;})


            TagsViewList = initialState.TagsViewList;


            return {
                 ...state,
                 TagsViewList:TagsViewList
        
            }
            
        } break;
        case type.removeTag:{
            
            let TagsViewList = {};

            initialState.TagsViewList.all = initialState.TagsViewList.all.filter(item => item.path != action.Tagpath);
           
            TagsViewList = initialState.TagsViewList;

            console.log(TagsViewList)

            return {
                 ...state,
                 TagsViewList:TagsViewList
        
            }
            
        }
        case type.selectTag:{
            
            let TagsViewList = {};

            initialState.TagsViewList.all = 
                  initialState.TagsViewList.all.map(item => {item.active = false; return item;})
                  .map(item => { if(item.path==action.Tagpath) item.active = true; return item;})

            TagsViewList = initialState.TagsViewList;

            return {
                 ...state,
                 TagsViewList:TagsViewList
        
            }
            
        }
        default:
            return {...state}

    }

}