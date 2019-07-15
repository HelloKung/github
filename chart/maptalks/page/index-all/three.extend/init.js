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