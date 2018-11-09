import * as THREE from 'three'

export default scene => {
  const radius = 10

  const geometry = new THREE.IcosahedronBufferGeometry(radius, 1)

  const count = geometry.attributes.position.count
  geometry.addAttribute(
    'color',
    new THREE.BufferAttribute(new Float32Array(count * 3), 3)
  )

  const color = new THREE.Color()
  const positions = geometry.attributes.position
  const colors = geometry.attributes.color

  for (let i = 0; i < count; ++i) {
    color.setRGB(1, 0.8 - (positions.getY(i) / radius + 1) / 2, 0)
    colors.setXYZ(i, color.r, color.g, color.b)
  }

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true,
    vertexColors: THREE.VertexColors,
    shininess: 0
  })

  const mesh = new THREE.Mesh(geometry, material)

  scene.add(mesh)
}
