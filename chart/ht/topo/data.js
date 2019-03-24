ht.Default.setImage("me", "./image/topo-ne.png");
ht.Default.setImage("rt", "./image/topo-router.png");


let nodes = [{
     
    id:0,
    name:"岳阳楼区职院办公楼-PTN [70-11]",
    image:"rt",
    position:{x:150, y:300},

},{
    id:1, 
    name:"宁乡县巷子口巷市6500PTN-2",
    image:"me",
    position:{x:350, y:300},

},{
    id:2, 
    name:"宁乡县黄材镇中心PTN-1",
    image:"me",
    position:{x:550, y:300},

},{
    id:3, 
    name:"岳阳楼区岳阳职院-PTN [700-10]",
    image:"me",
    position:{x:600, y:150},

},{
    id:4, 
    name:"邵阳市万基 [1-5]",
    image:"me",
    position:{x:600, y:450},

},{
    id:5, 
    name:"邵阳市银监局 [14-15]",
    image:"me",
    position:{x:750, y:150},

},{
    id:6, 
    name:"邵阳市农技中心 [14-9]",
    image:"me",
    position:{x:750, y:450},

},{
    id:7, 
    name:"邵阳市移动宿舍 [14-5]",
    image:"me",
    position:{x:800, y:300},

},{
    id:8, 
    name:"岳阳楼区岳阳职院-PTN [70-9]",
    image:"me",
    position:{x:1000, y:300},

},{
    id:9, 
    name:"华容县团东村九组-PTN [134-2]",
    image:"rt",
    position:{x:1200, y:300},

}]

let edges = [{
    source:"0",target:"1"
},{
    source:"1",target:"2"
},{
    source:"2",target:"3"
},{
    source:"2",target:"4"
},{
    source:"3",target:"5"
},{
    source:"4",target:"6"
},{
    source:"5",target:"7"
},{
    source:"6",target:"7"
},{
    source:"7",target:"8"
},{
    source:"8",target:"9"
}]
