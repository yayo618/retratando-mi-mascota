function init(){
    //paredes
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
    //cuadros y etq 1-9
	var cdr,tx1,tx2,myImg,cdrB,etq,txq1,txq2;
	myImg = new Image();
    for (var i = 1;i < 10; i++){
	myImg.src = "img/cdr/j"+i+".jpg";

	tx1 = new THREE.TextureLoader();
	tx2 = new tx1.load("img/cdr/j"+i+".jpg");
	cdr = new THREE.Mesh(
	  new THREE.PlaneGeometry(myImg.width/500,1),
	  new THREE.MeshBasicMaterial({color:0xffffff,map:tx2})
	);
	cdr.position.set(i*2.5,0,-6.2);
	scene.add(cdr);

	cdrB = new THREE.Mesh(
	  new THREE.BoxGeometry(myImg.width/500,1,0.05,0),
	  new THREE.MeshBasicMaterial({color:0x4b3e28})
	);
	cdrB.position.set(i*2.5,0,-6.225);
	scene.add(cdrB);

	txq1 = new THREE.TextureLoader();
	txq2 = new txq1.load("img/etq/e"+i+".jpg");
	etq = new THREE.Mesh(
	  new THREE.PlaneGeometry(0.607,0.25),
	  new THREE.MeshBasicMaterial({color:0xffffff,map:txq2})
	);
	etq.position.set((i+0.4)*2.5,0,-6.245);
	scene.add(etq);

    }    
       
}

window.onload = init;
