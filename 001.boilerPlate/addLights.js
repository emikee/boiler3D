import * as THREE from "three"

export function addLight() {
    const light = new THREE.DirectionalLight (0xffffff,1)
    light.position.set(50,0,4)
    return light
}