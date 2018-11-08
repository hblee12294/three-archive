import * as THREE from 'three'
import SceneSubject from './SceneSubject'
import GeneralLights from './GeneralLight'

export default canvas => {
  const clock = new THREE.Clock()
  const origin = new THREE.Vector3(0, 0, 0)

  const canvasDimension = {
    width: canvas.width,
    height: canvas.height
  }

  const mousePosition = {
    x: 0,
    y: 0
  }

  const scene = createScene()
  const renderer = createRender(canvasDimension)
  const camera = createCamera(canvasDimension)
  const objects = createObjects(scene)

  // --- Functions ---

  function createScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#ffffff')

    return scene
  }

  function createRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function createCamera({ width, height }) {
    const aspectRatio = width / height
    const fov = 60
    const nearPlane = 4
    const farPlane = 1000
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

    camera.position.z = 50

    return camera
  }

  // Multiple objects
  function createObjects(scene) {
    const objects = [
      new GeneralLights(scene),
      new SceneSubject(scene)
    ]

    return objects
  }

  function update() {
    const elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < objects.length; ++i) {
      objects[i].update(elapsedTime)

      updateCameraPositionRelativeToMouse()
      renderer.render(scene, camera)
    }
  }

  // How it works ???
  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01
    camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01
    camera.lookAt(origin)
  }

  function onWindowResize() {
    // Get width, height attributes from <canvas>
    const { width, height } = canvas

    canvasDimension.width = width
    canvasDimension.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  // Update mouse position
  function onMouseMove(x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  return {
    update,
    onWindowResize,
    onMouseMove
  }
}