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

function HtCreateEdge(item){

    var source = dataModel.getDataById(item.source);
    var target = dataModel.getDataById(item.target);
    
    var edge = new ht.Edge();

    edge.setSource(source);
    edge.setTarget(target);
    
    dataModel.add(edge);       

  
}