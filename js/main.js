import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/js/jsm/controls/OrbitControls.js';
import Stats from '/js/jsm/libs/stats.module.js';
import * as Mesh from '/js/jsm/libs/mesh.module.js';
import dat from '/js/jsm/libs/dat.gui.module.js';

"using strict";

let renderer, scene, camera, cameraControl, mesh, stats, raycaster;

const mouse = new THREE.Vector2();

var selected;

let gui = new dat.GUI();

let planeMenu = gui.addFolder("Plane Menu")
let posMenu = gui.addFolder("Position Menu");
let rotMenu = gui.addFolder("Rotation Menu");
let appearMenu = gui.addFolder("Appearance Menu");
let generalMenu = gui.addFolder("General Menu");

function onClick( event )
{
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );

    const intersects = raycaster.intersectObjects( scene.children , true);

    if ( intersects.length > 0 ) 
    {
        selected = intersects[0].object;
        //selected.material.color = new THREE.Color(Math.random() * 0xffffff); //only for testing to check if item is selected
        resetValues();
    }
}

function resetValues()
{
    //Set menu items to the corresponding selected item
    posMenu.__controllers[0].setValue(selected.position.x);
    posMenu.__controllers[1].setValue(selected.position.y);
    posMenu.__controllers[2].setValue(selected.position.z);

    rotMenu.__controllers[0].setValue(selected.rotation.x * 180 / Math.PI);
    rotMenu.__controllers[1].setValue(selected.rotation.y * 180 / Math.PI);
    rotMenu.__controllers[2].setValue(selected.rotation.z * 180 / Math.PI);

    appearMenu.__controllers[0].setValue(selected.material.wireframe);

    //This is incorrect!!!!
    if(selected.material.color.b != 1)
        appearMenu.__controllers[1].object.colorPalette[1] = selected.material.color.b*256;
    else if(selected.material.color.b == 1)
        appearMenu.__controllers[1].object.colorPalette[1] = 1;

    if(selected.material.color.g != 1)
        appearMenu.__controllers[1].object.colorPalette[2] = selected.material.color.g*256;
    else if(selected.material.color.g == 1)
        appearMenu.__controllers[1].object.colorPalette[2] = 1;

    if(selected.material.color.r != 1)
        appearMenu.__controllers[1].object.colorPalette[0] = selected.material.color.r*256;
    else if(selected.material.color.r == 1)
        appearMenu.__controllers[1].object.colorPalette[0] = 1;

    //console.log(appearMenu.__controllers[1].object.colorPalette[2]);
    //console.log(selected.material.color.g*256);
}

function init() {

    //RAYCASTER
    raycaster = new THREE.Raycaster();

    // RENDERER
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    //renderer.setClearColor(new THREE.Color(0.2, 0.2, 0.35));
    document.body.appendChild(renderer.domElement);

    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    let fov = 60;
    let aspect = window.innerWidth / window.innerHeight;
    let near = 0.1;
    let far = 10000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 10);
    cameraControl = new OrbitControls(camera, renderer.domElement); 
    
    mesh = new Mesh.Cube();
    scene.add(mesh);
    selected = mesh;


    //Geometry menu
    let geometryMenu = gui.addFolder("Geometries");
    geometryMenu.open();

    //Create geometries available in geometry menu
    var sphereButton = { add:function(){ 
        mesh = new Mesh.Sphere();
        mesh.position.x = Math.random() * 3; //Modify starting position
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(sphereButton,'add').name("Sphere");
    //Cubo
    var cubeButton = { add:function(){ 
        mesh = new Mesh.Cube();
        mesh.position.x = Math.random() * 3;
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(cubeButton,'add').name("Cube");

    var cilinderButton = { add:function(){ 
        mesh = new Mesh.Cylinder();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(cilinderButton,'add').name("Cilinder");
    //E
    var eButton = { add:function(){ 
        mesh = new Mesh.Ee();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(eButton,'add').name("E");
    //Ocho
    var ochoButton = { add:function(){ 
        mesh = new Mesh.Ocho();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(ochoButton,'add').name("8");

    //Pyramid
    var pyramidButton = { add:function(){ 
        mesh = new Mesh.Pyramid();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(pyramidButton,'add').name("Pyramid");

    //Orthohedron 
    var pyramidButton = { add:function(){ 
        mesh = new Mesh.Orthohedron ();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(pyramidButton,'add').name("Orthohedron");

    //Pentagonal Prism 
    var pentagonalPrismButton = { add:function(){ 
        mesh = new Mesh.PentagonalPrism();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(pentagonalPrismButton,'add').name("Pentagonal Prism");

    //Arrow
    var arrowButton = { add:function(){ 
        mesh = new Mesh.Arrow();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(arrowButton,'add').name("Arrow");

    //Trapezoidal prism
    var trapezoidalPrismButton = { add:function(){ 
        mesh = new Mesh.TrapezoidalPrism();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(trapezoidalPrismButton,'add').name("Trapezoidal prism");

    //Romboidal prism
    var romboidalPrismButton = { add:function(){ 
        mesh = new Mesh.RomboidalPrism();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(romboidalPrismButton,'add').name("Romboidal prism");

    //Square pyramid
    var squarePyramidButton = { add:function(){ 
        mesh = new Mesh.SquarePyramid();
        mesh.position.x = Math.random() * 3; 
        mesh.position.y = Math.random() * 3;
        scene.add(mesh);
    }};
    geometryMenu.add(squarePyramidButton,'add').name("Square pyramid")
    
    //model
    let model =
    {
        posX : selected.position.x,
        posY : selected.position.y,
        posZ : selected.position.z,
        rotX : selected.rotation.x * 180 / Math.PI,
        rotY : selected.rotation.y * 180 / Math.PI,
        rotZ : selected.rotation.z * 180 / Math.PI,
        posHome: function(){
            selected.position.x = 0;
            selected.position.y = 0;
            selected.position.z = 0;
            model.rotX = 0;
            model.rotY = 0;
            model.rotZ = 0;
            selected.rotation.x = model.rotX;
            selected.rotation.y = model.rotY;
            selected.rotation.z = model.rotZ;
        },
        colorPalette : [1, 1, 1],
        wireFrame : selected.material.wireframe,
        showStats : true,
        opacity : 1
    }


    //Model Position
    let sliderPosX = posMenu.add(model, "posX").min(-10).max(10).step(0.5).name("X").listen().onChange(function(value){
        selected.position.x = value;
    });

    let sliderPosY = posMenu.add(model, "posY").min(-10).max(10).step(0.5).name("Y").listen().onChange(function(value){
        selected.position.y = value;
    });

    let sliderPosZ = posMenu.add(model, "posZ").min(-10).max(10).step(0.5).name("Z").listen().onChange(function(value){
        selected.position.z = value;
    });

    //Model plane
    let planeGeometry = new THREE.PlaneGeometry( 5, 5, 32 );
    let planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    let plane = new THREE.Mesh( planeGeometry, planeMaterial );
    scene.add( plane );
    planeMenu.add(plane, "visible").setValue(false).name("Plane");

    //Rotation Menu
    let sliderRotX = rotMenu.add(model, "rotX").min(-180).max(180).step(5).name("X deg:").listen().onChange(function(value){
        selected.rotation.x = value * Math.PI / 180;
    });

    let sliderRotY = rotMenu.add(model, "rotY").min(-180).max(180).step(5).name("Y deg:").listen().onChange(function(value){
        selected.rotation.y = value * Math.PI / 180;
    });

    let sliderRotZ = rotMenu.add(model, "rotZ").min(-180).max(180).step(5).name("Z deg:").listen().onChange(function(value){
        selected.rotation.z = value * Math.PI / 180;
    });

    //Apperance Menu
    let chbWireframe = appearMenu.add(model, "wireFrame").setValue(true).name("Wireframe").onChange(function(value){
        selected.material.wireframe = value;
    });

    let colorPalette = appearMenu.addColor(model, "colorPalette").name("Color Palette").listen().onChange(function(color){
        selected.material.color = new THREE.Color(color[0]/256, color[1]/256, color[2]/256);
    });

    

    let opacity = appearMenu.add(model, "opacity").min(0).max(1).step(.1).name("opacity").listen().onChange(function(value){
        selected.material.opacity = value;

    });

    //GENERAL MENU (All geometries wireframe, background color, etc....)
    let checkBox = {"wireframe":false};
    
    let generalWireframeButton = generalMenu.add(checkBox, "wireframe").name("All geometries wireframe:").onChange(function(value){
        scene.children.forEach(child=>{
            child.material.wireframe = value;
        });
    });
    let showStatsMenu = generalMenu.add(model, "showStats").setValue(true).name("Show Stats").onChange(function(value){
        stats.dom.style.display = value ? "inline-block" : "none";
    });
    var backgroundColor = {color: "#000000"};
    var colorObj = new THREE.Color( backgroundColor.color );

    generalMenu.addColor(backgroundColor, 'color').onChange(function(color){
        colorObj = new THREE.Color(color);
        renderer.setClearColor(colorObj);
    });
         
    // STATS
    stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    // RENDER LOOP
    renderLoop();

    //listen to mouse event
    renderer.domElement.addEventListener("click", onClick);
}

function renderLoop() 
{
    stats.begin();
    renderer.render(scene, camera); // DRAW SCENE
    updateScene();
    stats.end();
    stats.update();
    requestAnimationFrame(renderLoop);
}

function updateScene() {
    
}

// EVENT LISTENERS & HANDLERS
document.addEventListener("DOMContentLoaded", init);

window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});