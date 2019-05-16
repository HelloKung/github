var dataModel = new ht.DataModel(),
      graphView = new ht.graph.GraphView(dataModel),
        view = graphView.getView();  

function init(){                                
    
                  

    view.className = 'main';
    document.body.appendChild(view);    
    window.addEventListener('resize', function (e) {
        graphView.invalidate();
    }, false);                         
         
    
    nodes.forEach(node => {
        HtCreateNode(node);
    })

    console.log(dataModel);
    edges.forEach(edge => {
        HtCreateEdge(edge);
    })

    
    
                 
}


function HtCreateNode(item){

    var node = new ht.Node();
    node.setName(item.name);
    node._id = item.id;
    node.setPosition(item.position.x, item.position.y);   
    
    if(item.image!=null&&item.image)
          node.setImage(item.image);             
    
    dataModel.add(node);

}

function HtCreateEdge(item,node1,node2){

    var source = dataModel.getDataById(item.source);
    var target = dataModel.getDataById(item.target);
    
    var edge = new ht.Edge(node1,node2);

   

    edge.setSource(source);
    edge.setTarget(target);

    edge.s({
        
        "flow":true ,
        "flow.element.autorotate": true,
        "flow.count" :1,
        "flow.element.max":30,
        'edge.type': 'flex',
        'edge.corner.radius': 5 ,   
        "flow.element.background":"rgba(255, 0, 0, 0.4)"             
    });
    

    edge.s("flow", true);

    dataModel.add(edge);       

  
}