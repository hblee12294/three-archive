import * as THREE from 'three'
import ThreeConstructor from '../common/ThreeConstructor'
import Light from './Light'
import Subject from './Subject'

export default container => {
  const canvas = new ThreeConstructor(container)

  const clock = new THREE.Clock()
  const origin = new THREE.Vector3(0, 0, 0)

  const mousePosition = {
    x: 0,
    y: 0
  }

  const scene = createScene()
  const renderer = createRenderer(canvas.el)
  const camera = createCamera(canvas.el)
  const subjects = createSubjects(scene)

  init()

  // --- Functions ---

  function init() {
    canvas.addResizeHandler(onWindowResize)
    canvas.addMouseMoveHandler(onMouseMove)
    render()
  }

  function createScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#ffffff')

    return scene
  }

  function createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(canvas.width, canvas.height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function createCamera(canvas) {
    const aspectRatio = canvas.width / canvas.height
    const fov = 60
    const nearPlane = 4
    const farPlane = 1000
    const camera = new THREE.PerspectiveCamera(
      fov,
      aspectRatio,
      nearPlane,
      farPlane
    )

    camera.position.z = 50

    return camera
  }

  function createSubjects(scene) {
    const subjects = [new Light(scene), new Subject(scene)]

    return subjects
  }

  function onWindowResize() {
    // Get width, height attributes from <canvas>
    const { width, height } = canvas.el

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  // Update mouse position
  function onMouseMove(x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (mousePosition.x * 0.01 - camera.position.x) * 0.01
    camera.position.y += (-(mousePosition.y * 0.01) - camera.position.y) * 0.01
    camera.lookAt(origin)
  }

  function update() {
    const elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < subjects.length; ++i) {
      subjects[i].update(elapsedTime)

      updateCameraPositionRelativeToMouse()
      renderer.render(scene, camera)
    }
  }

  function render() {
    requestAnimationFrame(render)
    update()
  }
}
