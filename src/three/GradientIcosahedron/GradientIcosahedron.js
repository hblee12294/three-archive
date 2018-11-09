import * as THREE from 'three'
import ThreeConstructor from '../common/ThreeConstructor'
import Light from './Light'
import Subject from './Subject'

export default container => {
  const canvas = new ThreeConstructor(container)

  const mousePosition = {
    x: 0,
    y: 0
  }

  const scene = createScene()
  const renderer = createRenderer(canvas.el)
  const camera = createCamera(canvas.el)
  const subject = createSubjects(scene)

  init()

  // --- Functions ---

  function createScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

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

    return renderer
  }

  function createCamera(canvas) {
    const fov = 60
    const aspectRatio = canvas.width / canvas.height
    const nearPlane = 1
    const farPlane = 1000
    const camera = new THREE.PerspectiveCamera({
      fov,
      aspectRatio,
      nearPlane,
      farPlane
    })

    camera.position.z = 50

    return camera
  }

  function createSubjects(scene) {
    new Light(scene)
    new Subject(scene)
  }

  function onWindowResize() {
    const { width, height } = canvas.el

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function onMouseMove(x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (mousePosition.x * 0.01  - camera.position.x) * 0.1
    camera.position.y += (-(mousePosition.y * 0.01 ) - camera.position.y) * 0.1
    camera.lookAt(scene.position)
  }

  function update() {
    updateCameraPositionRelativeToMouse()
    renderer.render(scene, camera)
  }

  function render() {
    requestAnimationFrame(render)
    update()
  }

  function init() {
    canvas.addResizeHandler(onWindowResize)
    canvas.addMouseMoveHandler(onMouseMove)
    render()
  }
}
