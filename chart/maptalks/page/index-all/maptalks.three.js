

var threeLayer = new maptalks.ThreeLayer('t', {
    forceRenderOnMoving : true,
    forceRenderOnRotating : true
});
threeLayer.prepareToDraw = function (gl, scene, camera) {
    var me = this;
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 10, 10).normalize();

    scene.add(light);

    let object = new THREE.BoxGeometry(1,1,1);

    let material = new THREE.MeshBasicMaterial({color:"#ff0000"});

   


    let cube = new THREE.Mesh(object, material); 

    //VillaBuildings(scene);

    // var v = threeLayer.coordinateToVector3(map.getCenter());

    // cube.position.x = v.x;
    // cube.position.y = v.y;
    // cube.position.z = v.z;
  

    // scene.add(cube)


};
threeLayer.addTo(map);

//select buildings by mouse click
var raycaster = new THREE.Raycaster();

document.addEventListener('click', function (event) {
    event.preventDefault();
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    var objects = [];
    threeLayer.getScene().children.forEach(child => {
        if (child instanceof THREE.Mesh) {
           objects.push(child);
        }
    })
    raycaster.setFromCamera(mouse, threeLayer.getCamera());
    var intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0) {
        alert('Mesh : ' + intersects[0].object.uuid);
    }
}, false);

function getColor(level) {
    if (level < 2) {
        return 0x2685a7;
    } else if (level >= 2 && level <= 5) {
        return 0xff5733;
    } else {
        return 0xff2e00;
    }
 }


 threeLayer.draw = function () {
    
    threeLayer.renderScene();
}
