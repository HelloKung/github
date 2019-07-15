    
    
    highlightBox = new THREE.Mesh(
        new THREE.BoxBufferGeometry(),
        new THREE.MeshLambertMaterial( { color: 0xffff00 }
        ) );
    scene.add( highlightBox );
    

    let floor_1 = createCuboid({

        size:{a:500,b:240,c:1},
        position:{x:0,y:-60,z:0},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#37e8f6",opacity:0.3,transparent:true}

    })

    let floor_2 = createCuboid({

        size:{a:500,b:240,c:0.1},
        position:{x:0,y:-60,z:0},
       
        materials:{color:"#37e8f6",opacity:0.4,transparent:true}

    })

    let floor_3 = createCuboid({

        size:{a:500,b:240,c:0.1},
        position:{x:0,y:-60,z:0},
        materials:{color:"#37e8f6",opacity:0.6,transparent:true}

    })
 
    
    let wall_1 = createCuboid({

        size:{a:180,b:2,c:40},
        position:{x:120,y:20.5,z:90},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true}

    })

    let wall_2 = createCuboid({

        size:{a:180,b:2,c:40},
        position:{x:120,y:20.5,z:-50},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true}

    })

    let wall_3 = createCuboid({

        size:{a:2,b:140,c:40},
        position:{x:209,y:20.5,z:20},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true}

    })
    
    let floor_4 = createCuboid({

        size:{a:180,b:140,c:1},
        position:{x:120,y:0,z:20},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true}

    })
 
    let cube1 = createCuboid({

        size:{a:154,b:64,c:5},
        position:{x:-100,y:3.5,z:56},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true} 

    })
    
    let cube2 = createCuboid({

        size:{a:160,b:70,c:20},
        position:{x:-100,y:16,z:56},
        border:true,
        materials:{color:"#2883d9",opacity:0.4,transparent:true} 

    })

    createWave({
        width:160,
        height:70,
        position:{x:-100,y:26,z:56},
        rotation:{x:Math.PI/2,y:0,z:0}
    });

    createWave({
        width:160,
        height:20,
        position:{x:-100,y:16,z:90},
        rotation:{x:0,y:0,z:0}
    });
    
    createWave({
        width:160,
        height:20,
        position:{x:-100,y:16,z:22},
        rotation:{x:0,y:0,z:0}
    });

    
    for(let i = 0 ;i < 4;i++){

        createCuboid({

            size:{a:10,b:120,c:30},
            position:{x:80 + i*36,y:16,z:20},
            //rotate:{x:0,y:0,z:0},
            border:true,
            materials:{color:"#2883d9",opacity:0.4,transparent:true}

        })

    }

    for(let i = 0 ;i < 5;i++){
 
        createObjectA({x:50,y:0,z:-34 + i*27}); 

    }

    








    scene.rotateX(Math.PI/6);  
    
    camera.position.z = 300;    // 200
    

    var render = function() {
        requestAnimationFrame(render);
        TWEEN.update();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
        //labelRenderer.render( scene, camera );
        CSS3Drenderer.render(scene,camera);
        renderer.render(scene, camera);
    };

 startAnimate();
 render();