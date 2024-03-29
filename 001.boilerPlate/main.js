import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh, addStandardMesh, addConeMesh, addDonutMesh } from "./addMeshes"
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
let tick = 0

init()
function init() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  
  //meshes
  meshes.default = addBoilerPlateMesh()
  meshes.standard = addStandardMesh()
  meshes.cone = addConeMesh()
  meshes.donut = addDonutMesh()

  //lights
  meshes.defaultLight = addLight()

  //scene operations
  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.cone)
  scene.add(meshes.donut)
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
  tick += 0.01
  requestAnimationFrame(animate)

  meshes.default.position.x = Math.sin(tick)
  meshes.default.position.y = Math.cos(tick)
  meshes.default.position.z = Math.cos(tick)
  meshes.default.rotation.z += 0.01

  meshes.cone.rotation.z = Math.cos(tick*2)
  meshes.cone.position.x = Math.sin(tick*5)
  meshes.cone.position.y = Math.sin(tick*2)
  meshes.cone.position.z = Math.cos(tick*3)

  meshes.standard.rotation.y += 0.01
  meshes.standard.position.y = Math.sin(tick*0.5)
  meshes.standard.position.z = Math.sin(tick)

  renderer.render(scene, camera)
}

/*
primitive geometry -> basic shapes
custom geo -> define geo using math (bezier)
buffer geo -> manipulating all vertex data; mucho complicated :(
*/
