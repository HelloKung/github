    
    

let root = createCuboid({

    size:{a:300,b:200,c:2},
    position:{x:0,y:-1.1,z:0},
    //rotate:{x:0,y:0,z:0},
    border:true,
    materials:{color:"#ccc"},
   

})


let floor_0 = createFloor({

    position:{x:0,y:0,z:0},
    //rotate:{x:0,y:0,z:0},
    scale:1.04,
    h:20,
    border:false,
    materials:{
        color:"#ccc"
    }
})

let floor_1 = createFloor({

    position:{x:0,y:20,z:0},
    scale:1,
    h:10,
    border:true,
    materials:{
        color:"#2196f3",
        transparent:true,
        opacity:0.8
    }
})




let floor_2 = createFloor({

    position:{x:0,y:30,z:0},
    scale:1.04,
    h:1,
    border:false,
    materials:{
        color:"#ccc"
    }
})


let nh = 31;
//31 41 42 52
for(let i = 0 ;i < 35 ;i++){

    if(i < 31){

        createFloor({

            position:{x:0,y:nh + 10 * i + i,z:0},
            scale:0.98  * (1 - 0.01 * i),
            h:10,
            border:true,
            materials:{
                color:"#2196f3",
                transparent:true,
                opacity:0.8
            }
        })
        
        createFloor({
        
            position:{x:0,y:nh + 10 + 11 * i ,z:0},
            scale:1.04 * (1 - 0.01 * i),
            h:1,
            border:false,
            materials:{
                color:"#ccc"
            }
        })

    }else{

        createFloor({

            position:{x:0,y:nh + 10 * i + i,z:0},
            scale:0.98  * (1 - 0.01 * i),
            h:10,
            border:true,
            materials:{
                color:"#eee",
                transparent:true,
                opacity:0.8
            }
        })
        
        


    }

}


let roof = createRoof({

    position:{x:0,y:416,z:0},
    scale:1 * 0.98  * (1 - 0.01 * 34),
    h:20,
    border:false,
    materials:{
        color:"#eee"
    }
})



 
 
 camera.position.z = 200;    // 200
 
 
 var render = function() {
     requestAnimationFrame(render);
     renderer.shadowMap.enabled = true;
     renderer.shadowMap.type = THREE.PCFSoftShadowMap;  
     renderer.render(scene, camera);
 };

 render();