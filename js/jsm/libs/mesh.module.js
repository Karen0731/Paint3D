import * as THREE from '/build/three.module.js';

class Mesh extends THREE.Mesh {
    constructor() {
        super();
    }
    setWireframe(value) {
        this.material.wireframe = value;
    }
}

class Quad extends Mesh {
    constructor() {
        super();
        // QUAD
        let vertices = [-0.5, 0.5, 0,
            -0.5, -0.5, 0,
            0.5, -0.5, 0,
            0.5, 0.5, 0];
        let indices = [0,1,2, 0,2,3];

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.geometry.setIndex(indices);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false, side: THREE.DoubleSide});
    }
}

//E
class Ee extends Mesh {
    constructor() {
        super();
        // Ee
        let vertices = [-0.5,1,0.5,
            -0.5,-1,0.5,
            0,-1,0.5,
            0.5,-1,0.5,
            0.5,-0.5,0.5,
            0,-0.5,0.5,
            0,-0.25,0.5,
            0.5,-0.25,0.5,
            0.5,0.25,0.5,
            0,0.25,0.5,
            0,0.5,0.5,
            0.5,0.5,0.5,
            0.5,1,0.5,
            0,1,0.5,
            -0.5,1,-0.5,
            -0.5,-1,-0.5,
            0,-1,-0.5,
            0.5,-1,-0.5,
            0.5,-0.5,-0.5,
            0,-0.5,-0.5,
            0,-0.25,-0.5,
            0.5,-0.25,-0.5,
            0.5,0.25,-0.5,
            0,0.25,-0.5,
            0,0.5,-0.5,
            0.5,0.5,-0.5,
            0.5,1,-0.5,
            0,1,-0.5];
        let indices = [0,1,2, 0,2,13,
            5,2,3, 5,3,4,
            9,6,7, 9,7,8,
            13,10,11, 13,11,12,
            14,15,16, 14,16,27,
            19,16,17, 19,17,18,
            23,20,21, 23,21,22,
            27,24,25, 27,25,26,
            0,1,15, 0,15,14, 
            1,3,17, 1,17,15,
            3,4,18, 3,18,17,
            4,5,19, 4,19,18,
            5,6,20, 5,20,19,
            6,7,21, 6,21,20, 
            7,8,22, 7,22,21,
            8,9,23, 8,23,22,
            9,10,24, 9,24,23,
            10,11,25, 10,25,24,
            11,12,26, 11,26,25,
            12,0,14, 12,14,26];

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.geometry.setIndex(indices);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false, side: THREE.DoubleSide});
    }
}

//8
class Ocho extends Mesh {
    constructor() {
        super();
        // Ocho
        let vertices = [-0.75,1,0.5,
            -0.75, -1,0.5,
            -0.25,-1,0.5,
            0.25,-1,0.5,
            0.75,-1,0.5,
            0.75,1,0.5,
            0.25,1,0.5,
            -0.25,1,0.5,
            -0.25,0.75,0.5,
            -0.25,0.25,0.5,
            -0.25,-0.25,0.5,
            -0.25,-0.75,0.5,
            0.25,-0.75,0.5,
            0.25,-0.25,0.5,
            0.25,0.25,0.5,
            0.25,0.75,0.5,
            -0.75,1,-0.5,
            -0.75, -1,-0.5,
            -0.25,-1,-0.5,
            0.25,-1,-0.5,
            0.75,-1,-0.5,
            0.75,1,-0.5,
            0.25,1,-0.5,
            -0.25,1,-0.5,
            -0.25,0.75,-0.5,
            -0.25,0.25,-0.5,
            -0.25,-0.25,-0.5,
            -0.25,-0.75,-0.5,
            0.25,-0.75,-0.5,
            0.25,-0.25,-0.5,
            0.25,0.25,-0.5,
            0.25,0.75,-0.5];

        let indices = [0,1,2, 0,2,7,//Front
            11,2,3, 11,3,12,
            6,3,4, 6,4,5,
            7,8,15, 7,15,6,
            9,10,13, 9,13,14,
            //back
            16,17,18, 16,18,23,
            27,17,19, 27,19,28,
            22,19,20, 22,20,21,
            23,24,31, 23,31,22,
            25,26,29, 25,29,30,
            //Bordes
            0,1,17, 0,17,16,
            1,4,20, 1,20,17,
            4,5,21, 4,21,20,
            5,0,16, 5,16,21,
            8,9,25, 8,25,24,
            9,14,30, 9,30,25,
            14,15,31, 14,31,30,
            15,8,24, 15,24,31,
            10,11,27, 10,27,26,
            11,12,28, 11,28,27,
            12,13,29, 12,29,28,
            13,10,26, 13,26,29];

        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.geometry.setIndex(indices);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false, side: THREE.DoubleSide});
    }
}

//Change these geometries!!!
class Cube extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false,transparent : true});
    }
}

class Sphere extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.SphereGeometry(1, 5, 5);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false,transparent : true});
        
    }
}


class Cylinder extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.CylinderGeometry(.5, .5, 1, 10);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false,transparent : true});
    }
}

export {Quad, Cube, Sphere, Cylinder, Ee, Ocho};