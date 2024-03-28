import * as THREE from "three"

export const addBoilerPlateMesh = () => {
    //a function called addboilerplatemesh
    const box = new THREE.BoxGeometry(2,1,2)
    const boxMaterial = new THREE.MeshBasicMaterial({color: 5373826})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(-1,0,0)
    return boxMesh
}

export function addStandardMesh() {
    const box = new THREE.BoxGeometry(1,1,1)
    const boxMaterial = new THREE.MeshStandardMaterial({color: 20808080})
    const boxMesh = new THREE.Mesh(box, boxMaterial)
    boxMesh.position.set(3,1,0)
    return boxMesh
}
