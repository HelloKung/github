

const Routers = [
    
    {
        title: "首页",
        path: "/layout/home",
        meta: {icon:"pie-chart"}
    },{
        title: "基础功能",
        path: "/layout/basic",
        meta: {icon:"sliders"},
        children:[{
            
                title:"表格",
                path:"/layout/basic/table",
                meta: {icon:"table"}
            },{
            
                title:"Antd",
                path:"/layout/basic/antd",
                meta: {icon:"area-chart"}
            },
        ]
    
    },{

        title: "安全管理",
        path:  "safety", 
        meta: {icon:"schedule"},
        children: [
            {
              
              title: "用户管理",
              path: "safetyuser",
            
            },
            {
              
              title: "部门管理",
              path: "safetyDepartment",
            
            },
            {
              
              title: "角色管理",
              path: "safetyRole",
            
            },
            {
              
              title: "权限管理",
              path: "safetyCompetence",
              children: [
                {
                  
                  title: "菜单权限管理",
                  path: "safetymenu",
                  
                }
              ]
            },
            {
              title: "日志管理",
              path: "safetyLog",
              children: [
                {
                    title: "登入日志管理",
                    path: "safetyLogin"
                },
                {
                  
                    title: "操作日志管理",
                    path: "safetyOperate",
                 
                }
              ]
            },
            {

              title: "安全策略",  
              path: "safetySafePloy",
            }
        ]
    }
    
];



export default Routers;