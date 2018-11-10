import * as THREE from 'three'

export default scene => {
  const geometry = new THREE.BoxGeometry(20, 20, 20, 20, 20, 20)
  const material = new THREE.MeshNormalMaterial({
    wireframe: true
  })
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)

  function twist() {
    const quaternion = new THREE.Quaternion()

    for (let i = 0; i < geometry.vertices.length; ++i) {
      const posY = geometry.vertices[i].y
      const twistAmount = 10

      quaternion.setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        (Math.PI / 180) * (posY / twistAmount)
      )

      geometry.vertices[i].applyQuaternion(quaternion)
    }

    geometry.verticesNeedUpdate = true
  }

  function update() {
    cube.rotation.x += 0.001
    cube.rotation.y += 0.001
    cube.rotation.z += 0.0005
    twist(geometry)
  }

  return {
    update
  }
}
