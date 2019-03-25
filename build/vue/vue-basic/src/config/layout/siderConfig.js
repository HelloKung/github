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
         
        },{

            id:"word",
            title:"Word报告",
            icon:"icon-file-word"
         
        }]

    },{
        
        id:"chart",
        title:"图形",
        icon:"icon-stats-dots",
        children:[{

           id:"timemap",
           title:"时间轴地图",
           icon:"icon-map"
        },{

            id:"drillmap",
            title:"钻取地图",
            icon:"icon-map"
        }]
    }]
    
},{

    firstMenuId:"module",
    siderMenu:[{

        id:"moduleIndex",
        title:"首页",
        icon:"icon-quill",
      
    }]
    
}]


export default config;