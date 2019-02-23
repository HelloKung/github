export const type = {

    SWITCH_MENU:"SWITCH_MENU",         ///面包屑
    COLLAPSE:"COLLAPSE",               ///汉堡菜单
    TagsView:"TagsView",
    addTag:"addTag",
    removeTag:"removeTag",
    selectTag:"selectTag"
}


export function switchMenu (menuName) {  ///汉堡菜单
    
    return {
       
        type:type.SWITCH_MENU,
        menuName
    }

}


export function hamClick (isCollapse) {   ///面包屑

    return {

        type:type.COLLAPSE,
        isCollapse 
    }

} 

export function addTag (TagsViewElem) {

    return {
        
        type:type.addTag,
        TagsViewElem

    }


}

export function removeTag (Tagpath) {
   
    return {

        type:type.removeTag,
        Tagpath
    }

}

export function selectTag (Tagpath) {
   
    return {

        type:type.selectTag,
        Tagpath
    }

}


