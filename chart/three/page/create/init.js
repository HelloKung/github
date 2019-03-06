    
    
    
    ////  100
    ///创建地板
    ///地板高度0.5
    let floor = createCuboid({

           size:{a:300,b:160,c:0.5},
           //position:{x:0,y:0,z:0},
           //rotate:{x:0,y:0,z:0},
           border:true,
           materials:{color:0xcccccc}

    })
    ////长152.4 一半76.2 宽 94.4 一半47.2
    let floor_c1 = createCuboid({

        size:{a:152.4,b:94.4,c:0.5},
        position:{x:0,y:0.1,z:0},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0xffffff} 

    })

    ///层1墙0
    let wall_c1_0 = createCuboid({
           
           size:{a:2.4,b:36.2,c:33},
           position:{x:75,y:16.5,z:-29.1},//36.2/2-47.2
           //rotate:{x:0,y:0,z:0},
           border:true,
           materials:{color:0x956e4d}
    })

        
    
    

    
    
    ///层1墙2
    let wall_c1_2 = createCuboid({
           
        size:{a:2.4,b:40.2,c:33},
        position:{x:75,y:16.5,z:27.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })


    ///层1墙3
    let wall_c1_3 = createCuboid({
           
        size:{a:38.4,b:2.4,c:33},
        position:{x:57,y:16.5,z:46},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    ///层1墙4
    let wall_c1_4 = createCuboid({
            
        size:{a:2.4,b:40.2,c:33},
        position:{x:39,y:16.5,z:27.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    ///层1墙5
    let wall_c1_5 = createCuboid({
            
        size:{a:40.2,b:2.4,c:33},
        position:{x:-6.1,y:16.5,z:34.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_6 = createCuboid({
            
        size:{a:2.4,b:46.2,c:33},
        position:{x:-25,y:16.5,z:12.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_7 = createCuboid({
            
        size:{a:2.4,b:36.2,c:33},
        position:{x:-25,y:16.5,z:-29.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_8 = createCuboid({
            
        size:{a:40.2,b:2.4,c:33},
        position:{x:-6.1,y:16.5,z:-46},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_9 = createCuboid({
            
        size:{a:25,b:2.4,c:33},
        position:{x:26.5,y:16.5,z:-46},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_10 = createCuboid({
            
        size:{a:37.2,b:2.4,c:33},
        position:{x:57.6,y:16.5,z:-46},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_11 = createCuboid({
            
        size:{a:40.2,b:2.4,c:33},
        position:{x:-6.1,y:16.5,z:-11},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_12 = createCuboid({
            
        size:{a:2.4,b:36.2,c:33},
        position:{x:39,y:16.5,z:-29.1},//36.2/2-47.2
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_13 = createCuboid({
            
        size:{a:2.4,b:22.2,c:33},
        position:{x:14,y:16.5,z:-36.1},//36.2/2-47.2
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_14 = createCuboid({
           
        size:{a:24.4,b:2.4,c:33},
        position:{x:64,y:16.5,z:7},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })

    let wall_c1_15 = createCuboid({
           
        size:{a:24.4,b:2.4,c:33},
        position:{x:64,y:16.5,z:-11},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
    })
    
    createWindow_t1();
    createDoor_t1(); 


    scene.rotateX(Math.PI/6);  // Math.PI/6
    //scene.rotateY(Math.PI*3/2);
    
    camera.position.z = 120;    // 200
    
    
    var render = function() {
        requestAnimationFrame(render);
     
        renderer.render(scene, camera);
    };

    render();