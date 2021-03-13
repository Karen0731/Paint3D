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

//Change these geometries!!!
class Cube extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false});
    }
}

class Sphere extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.SphereGeometry(1, 5, 5);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false});
    }
}


class Cylinder extends Mesh {
    constructor() {
        super();

        this.geometry = new THREE.CylinderGeometry(.5, .5, 1, 10);
        this.material = new THREE.MeshBasicMaterial({color: "white", wireframe: false});
    }
}

export {Quad, Cube, Sphere, Cylinder};