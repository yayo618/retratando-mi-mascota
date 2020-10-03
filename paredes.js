function init(){
    var pared1 = new THREE.Mesh(
        new THREE.PlaneGeometry(25,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared1.position.set(12.5,0,-6.25);
    scene.add(pared1);
    var pared2 = new THREE.Mesh(
        new THREE.PlaneGeometry(32.5,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared2.rotation.y += Math.PI/2;
    pared2.position.set(25,0,-22.5);
    scene.add(pared2);
    var pared3 = new THREE.Mesh(
        new THREE.PlaneGeometry(20,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared3.position.set(35,0,-38.75);
    scene.add(pared3);
    var pared4 = new THREE.Mesh(
        new THREE.PlaneGeometry(77.5,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared4.rotation.y -= Math.PI/2;
    pared4.position.set(45,0,0);
    scene.add(pared4);
    var pared5 = new THREE.Mesh(
        new THREE.PlaneGeometry(20,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared5.rotation.y = Math.PI;
    pared5.position.set(35,0,38.75);
    scene.add(pared5);
    var pared6 = new THREE.Mesh(
        new THREE.PlaneGeometry(20,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared6.rotation.y += Math.PI/2;
    pared6.position.set(25,0,28.75);
    scene.add(pared6);
    var pared7 = new THREE.Mesh(
        new THREE.PlaneGeometry(25,3),
      	new THREE.MeshBasicMaterial({color:0xe7e7e7}));
    pared7.rotation.y += Math.PI;
    pared7.position.set(12.5,0,18.75);
    scene.add(pared7);
}

window.onload = init;
