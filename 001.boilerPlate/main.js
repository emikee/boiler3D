import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh } from "./addMeshes"
import { addLight } from "./addLights"

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
const renderer = new THREE.WebGLRenderer({antialias: true})

//let mesh;
//you want to keep variables local when you can so you can 
//only change them within the function
//Instead, create an object {} to contain all mesh variables
camera.position.set(0,0,5)
const meshes = {}

init()
function init() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  
  //meshes
  meshes.default = addBoilerPlateMesh()
  meshes.standard = addStandardMesh()

  //lights
  meshes.defaultLight = addLight()

  //scene operations
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.defaultLight)

  resize()
  animate()
}

function resize(){
  window.addEventListener('resize', ()=> {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate() {
  requestAnimationFrame(animate)
  meshes.default.rotation.z += 0.01
  meshes.standard.rotation.y += 0.01
  renderer.render(scene, camera)
}

/*
primitive geometry -> basic shapes
custom geo -> define geo using math (bezier)
buffer geo -> manipulating all vertex data; mucho complicated :(
*/
