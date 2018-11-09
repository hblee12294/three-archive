import * as THREE from 'three'

export default scene => {
  const light = new THREE.DirectionalLight(0xffffff)

  light.position.set(0, 0, 1)

  scene.add(light)
}