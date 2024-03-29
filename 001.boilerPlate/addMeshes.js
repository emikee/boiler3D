import * as THREE from "three"
const textureLoader = new THREE.TextureLoader()

export const addBoilerPlateMesh = () => {
    //a function called addboilerplatemesh
    const box = new THREE.BoxGeometry(0.5,0.5,0.5)
    const boxMaterial = new THREE.MeshToonMaterial({color: 5373826})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(0,0,0)
    return boxMesh
}

export const addDonutMesh = () => {
    const color = textureLoader.load('metal/Metal_006_basecolor.jpg')
    const height = textureLoader.load('metal/Metal_006_height.png')
    const normal = textureLoader.load('metal/Metal_006_normal.jpg')
    const rough = textureLoader.load('metal/Metal_006_roughness.jpg')
    const geometry = new THREE.TorusGeometry(1, 0.5, 20, 80 );
    const boxMaterial = new THREE.MeshStandardMaterial({
        map: color,
        displacementMap: height,
        // displacementScale: 0.5,
        normalMap: normal,
        roughnessMap: rough,
        metalness: 0.5,
        roughness: 1
    })
    const boxMesh = new THREE.Mesh(geometry, boxMaterial)
    boxMesh.position.set(0,1,0)
    return boxMesh
}

export function addStandardMesh() {
    const box = new THREE.BoxGeometry(1,1,1)
    const boxMaterial = new THREE.MeshToonMaterial({color: 20808080})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(0,1,0)
    return boxMesh
}
export function addConeMesh () {
    const geometry = new THREE.ConeGeometry( 1, 1, 10 ); 
    const material = new THREE.MeshStandardMaterial( {
        color: 0xffff00,
        metalness: 2
    } );
    const cone = new THREE.Mesh(geometry, material ); 
    cone.position.set(1,1,0)
    return cone
}