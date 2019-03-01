    
    
    
    
    ///创建地板
    ///地板高度0.5
    let floor = createCuboid({

           size:{a:30,b:20,c:0.5},
           //position:{x:0,y:0,z:0},
           //rotate:{x:0,y:0,z:0},
           border:true,
           color:0xcccccc 

    })

    ///墙厚1
    let wall_back = createCuboid({
           
           size:{a:30,b:1,c:10},
           position:{x:0,y:5.25,z:-9.5},
           //rotate:{x:0,y:0,z:0},
           border:true,
           color:0xffffff
    })

    let wall_left = createCuboid({
           
        size:{a:20,b:1,c:10},
        position:{x:-14.5,y:5.25,z:0},
        rotate:{x:0,y:Math.PI/2,z:0},
        border:true,
        color:0xffffff
    })

    let wall_right = createCuboid({
           
        size:{a:20,b:1,c:10},
        position:{x:14.5,y:5.25,z:0},
        rotate:{x:0,y:Math.PI/2,z:0},
        border:true,
        color:0xffffff
    })  

    //console.log(wall_w);

    scene.rotateX(Math.PI/6);

    camera.position.z = 20;
    
    

    var render = function() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };

    render();