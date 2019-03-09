const config = [{

    firstMenuId:"platform",
    siderMenu:[{

         id:"platform",
         title:"平台一",
         icon:"icon-office"
    },{

        id:"icon",
        title:"图标库",
        icon:"icon-gift"
   }]   

},{

    firstMenuId:"practice",
    siderMenu:[{

        id:"table",
        title:"表格",
        icon:"icon-table2",
        children:[{

            id:"ElementTable",
            title:"表格封装",
            icon:"icon-stack"
         
        }]

    },{
        
        id:"chart",
        title:"图形",
        icon:"icon-stats-dots",

    }]
    
}]


export default config;