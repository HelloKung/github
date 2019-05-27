var dataModel = new ht.DataModel(),
      graphView = new ht.graph.GraphView(dataModel),
        view = graphView.getView();  


let nodelist = [];

function init(){                                
    
                  

    view.className = 'main';
    document.body.appendChild(view);    
    window.addEventListener('resize', function (e) {
        graphView.invalidate();
    }, false);                         
         
    
    nodes.forEach((node,index) => {
        HtCreateNode(node,index);
    })

    edges.forEach(edge => {
        HtCreateEdge(edge);
    })

    graphView.onDataClicked = function(data,e){

        if(data._id == 0){
            
           
            
            var info = this.getIconInfoAt(e, data);
            if(info){
                data.setStyle("label2.opacity",1-data.getStyle("label2.opacity"))
            } 

        }  
 
    }
   // graphView.enableFlow(100) 
                 
}


function HtCreateNode(item,index){

    var node = new ht.Node();
    node.setName(item.name);
    node._id = item.id;
    node.setPosition(item.position.x, item.position.y);   
    
    if(item.image!=null&&item.image)
          node.setImage(item.image);     
          
    if(index==0){

        node.addStyleIcon("icons",{
        
                position: 31,
                direction: 'east',
                offsetY: 3,
                names: [
                    {
                        width: 10,
                        height: 10,
                        comps: [
                            {
                                type: 'circle',
                                rect: [0, 0, 10, 10],
                                background: 'red',
                                gradient: 'radial.center',
                               
                            },
                            {
                                type: 'circle',
                                rect: [0, 0, 10, 10],
                                borderColor: '#3498DB',
                                borderWidth: 1,
                                visible: {
                                    func: function(data){
                                        return data.a('select.index') === 0;
                                    }
                                }
                            }
                           
                        ]                                
                    },
                    
                ],
                
            
            })
            
            node.s({
                    "label2":"lllabel",
                    "label2.position":31,
                    "label2.background":"#fcaf41",
                    "label2.offset.x":20,
                    "label2.offset.y":10,
                    "label2.opacity":0
                })

    }      
 
    dataModel.add(node);

}

function HtCreateEdge(item,node1,node2){

    var source = dataModel.getDataById(item.source);
    var target = dataModel.getDataById(item.target);
    
    var edge = new ht.Edge();

   

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
    

    // edge.s("flow", true);

    dataModel.add(edge);       

  
}