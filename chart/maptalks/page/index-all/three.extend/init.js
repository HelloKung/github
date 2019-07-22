function VillaBuildings(scene){


    var loader = new THREE.GLTFLoader().setPath("./model/melodia_city_hotel/");
        //内部解码文件夹
        THREE.DRACOLoader.setDecoderPath( '../../../three/js/javascript/' );
        loader.setDRACOLoader( new THREE.DRACOLoader() );

        loader.load("scene.gltf",function(gltf){

            var v = threeLayer.coordinateToVector3(map.getCenter());

            gltf.scene.scale.set(0.1,0.1,0.1);
            gltf.scene.position.set(v.x,v.y,v.z);
            scene.add(gltf.scene);

        });

       

}


function createHLGC(v,scene){

    // let root = createCuboid({

    //     size:{a:300 * 0.01,b:200 * 0.01,c:2 * 0.01},
    //     position:{x:0 + v.x,y:-1.1 * 0.01 + v.y,z:0 + v.z},
    //     rotate:{x:Math.PI/2.0,y:0,z:0},
    //     border:true,
    //     materials:{color:"#ccc"},
    //     mapScene:scene
    
    // })


    var group = new THREE.Group;

    let floor_0 = createFloor({

        position:{x:0 + v.x ,y:0 + v.y ,z:0  + v.z},
        scale:1.04 * 0.01,
        h:20 * 0.01,
        border:false,
        materials:{
            color:"#ccc"
        },
        mapScene:scene
    })

    floor_0.rotation.set({x:Math.PI/2.0,y:0,z:0});

    group.add(floor_0);

    
    let floor_1 = createFloor({
    
        position:{x:0 + v.x ,y:20 * 0.01 + v.y ,z:0  + v.z},
        //rotate:{x:-Math.PI/2.0,y:0,z:0},
        scale:1 * 0.01,
        h:10 * 0.01,
        border:true,
        materials:{
            color:"#2196f3",
            transparent:true,
            opacity:0.8
        },
        mapScene:scene
    })
    
    group.add(floor_1);
    
    
    let floor_2 = createFloor({
    
        position:{x:0 + v.x ,y:30 * 0.01 + v.y ,z:0  + v.z},
        //rotate:{x:-Math.PI/2.0,y:0,z:0},
        scale:1.04 * 0.01,
        h:1 * 0.01,
        border:false,
        materials:{
            color:"#ccc"
        },
        mapScene:scene
    })
    
    group.add(floor_2);
    
    
    
    let nh = 31;
    //31 41 42 52
    for(let i = 0 ;i < 35 ;i++){

        if(i < 31){

            createFloor({

                position:{x:0 + v.x,y:(nh + 10 * i + i) * 0.01 + v.y,z:0 + v.z},
                scale:0.98  * (1 - 0.01 * i) * 0.01,
                h:10 * 0.01,
                border:true,
                materials:{
                    color:"#2196f3",
                    transparent:true,
                    opacity:0.8
                },
                mapScene:scene
            })
            
            createFloor({
            
                position:{x:0 + v.x,y:(nh + 10 + 11 * i)  * 0.01  + v.y,z:0 + v.z},
                scale:1.04 * (1 - 0.01 * i) * 0.01,
                h:1 * 0.01,
                border:false,
                materials:{
                    color:"#ccc"
                },
                mapScene:scene
            })

        }else{

            createFloor({

                position:{x:0 + v.x,y:(nh + 10 * i + i) * 0.01 + v.y ,z:0 + v.z},
                scale:0.98  * (1 - 0.01 * i) * 0.01,
                h:10 * 0.01,
                border:true,
                materials:{
                    color:"#eee",
                    transparent:true,
                    opacity:0.8
                },
                mapScene:scene
            })
            
            


        }

    }


    let roof = createRoof({

        position:{x:0 + v.x,y:416 * 0.01 + v.y,z:0 + v.z},
        scale:1 * 0.98  * (1 - 0.01 * 34) * 0.01,
        h:20 * 0.01,
        border:false,
        materials:{
            color:"#eee"
        },
        mapScene:scene
    })


    group.rotation.set(Math.PI/2,0,0)
 
    group.position.set(0,0,1)

    scene.add(group)

}