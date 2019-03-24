    
    
    
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

    let floor_c2 = createFloor();

    ///层1墙0
    let wall_c1_0 = createCuboid({
           
           size:{a:2.4,b:36.2,c:33},
           position:{x:75,y:16.5,z:-29.1},//36.2/2-47.2
           //rotate:{x:0,y:0,z:0},
           border:true,
           materials:{color:0x956e4d}
    })

        
    let wall_c1_1 = createCuboid({
           
            size:{a:2.4,b:18,c:33},
            position:{x:75,y:16.5,z:-2},
            //rotate:{x:0,y:0,z:0},
            border:true,
            materials:{color:0x956e4d},
            remove:true
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
        materials:{color:0x956e4d},
        remove:true
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
    
    createDoor_t1(); 


    let wall_c1_1_window = createWindow_t1(wall_c1_1,"x");

    let wall_c1_3_window = createWindow_t2(wall_c1_3,"z");
    
    let wall_c1_5_window = createWindow_t2(wall_c1_5,"z");
    
    let wall_c1_7_window = createWindow_t1(wall_c1_7,"-x");

    let wall_c1_8_window = createWindow_t2(wall_c1_8,"-z");

    let wall_c1_9_window = createWindow_t3(wall_c1_9,"-z");
    
    let wall_c1_10_window = createWindow_t2(wall_c1_10,"-z");
    

////////////二层//////


    let  wall_c2_1 = createCube({

         points:[[0,0,0],[0,0,-94.4],[0,4,-94.4],[0,28,-47.2],[0,15,-12],[0,15,0]],
         center:[1.2,10.0,-47.2],
         direction:"x",
         depth:2.4,
         position:{x:75,y:43,z:0}


    });



    let  wall_c2_2 = createCube({

        points:[[0,0,0],[38.4,0,0],[38.4,15,0],[19.2,24,0],[0,15,0]],
        center:[19.2,10.0,1.2],
        direction:"z",
        depth:2.4,
        position:{x:57,y:43,z:46}
   });


   let  wall_c2_3 = createCuboid({

        size:{a:2.4,b:13.2,c:15},
        position:{x:39,y:40.5,z:40.7},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
   });

  
   let  wall_c2_4 = createCuboid({

        size:{a:65.2,b:2.4,c:15},
        position:{x:6.4,y:40.5,z:34},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
   })

   let wall_c2_5 = createCube({

        points:[[0,0,0],[0,0,-82.4],[0,4,-82.4],[0,28,-35.2],[0,15,0]],
        center:[1.2,10.0,-47.2],
        direction:"x",
        depth:2.4,
        position:{x:-25,y:43,z:-12}
    });



   let wall_c2_6 = createCuboid({

        size:{a:102.4,b:2.4,c:4},
        position:{x:25,y:35,z:-46},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d}
   }) 


   //let  wall_c2_1_window = createWindow_t4(wall_c2_1,"x");
    
   let  wall_c2_2_window = createWindow_t4(wall_c2_2,"z");
    
    

    let roof_1 = createRoof({

       

    });

    // let roof_2 = createShape({

    //     points:[{x:0,y:4},{x:19.2,y:13},{x:38.4,y:4},{x:38.4,y:0},{x:19.2,y:9}],
    //     depth:50.4,
    //     position:{x:37.8,y:48,z:1.6},
    //     //rotate:{x:0,y:0,z:0},
    //     border:true,
    //     materials:{color:0xffffff} 


    // });

    // let wall_c2_1 = createShape({

    //     points:[{x:94.4,y:0},{x:94.4,y:4},{x:47.2,y:28},{x:14,y:15},{x:0,y:15}],
    //     depth:2.4,
    //     position:{x:73.8,y:33,z:47.2},
    //     rotate:{x:0,y:Math.PI/2,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });



    // let wall_c2_2 = createShape({

    //         points:[{x:38.4,y:0},{x:38.4,y:15},{x:19.2,y:24},{x:0,y:15}],
    //         depth:2.4,
    //         position:{x:37.8,y:33,z:44.8},
    //         //rotate:{x:0,y:0,z:0},
    //         border:true,
    //         materials:{color:0x956e4d} 

    // });

    // let wall_c2_3 = createShape({

    //     points:[{x:12,y:0},{x:12,y:15},{x:0,y:15}],
    //     depth:2.4,
    //     position:{x:37.8,y:33,z:46},
    //     rotate:{x:0,y:Math.PI/2,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });

    // let wall_c2_4 = createShape({

    //     points:[{x:66.4,y:0},{x:66.4,y:15},{x:0,y:15}],
    //     depth:2.4,
    //     position:{x:-26.2,y:33,z:32.8},
    //     rotate:{x:0,y:0,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });
    
    // let wall_c2_5 = createShape({

    //     points:[{x:82.4,y:0},{x:82.4,y:4},{x:35.2,y:28},{x:0,y:15}],
    //     depth:2.4,
    //     position:{x:-26.2,y:33,z:35.2},
    //     rotate:{x:0,y:Math.PI/2,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });

    // let wall_c2_6 = createShape({

    //     points:[{x:102.4,y:0},{x:102.4,y:4},{x:0,y:4}],
    //     depth:2.4,
    //     position:{x:-26.2,y:33,z:-47.2},
    //     rotate:{x:0,y:0,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });

 
    
    


    scene.rotateX(Math.PI/6);  // Math.PI/6
    //scene.rotateY(Math.PI*3/2);
    
    
    
    camera.position.z = 200;    // 200
    
    
    var render = function() {
        requestAnimationFrame(render);
     
        renderer.render(scene, camera);
    };

    render();