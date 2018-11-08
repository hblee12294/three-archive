import SceneManager from './SceneManager'

export default container => {
  const canvas = createCanvas(container)
  const sceneManager = new SceneManager(canvas)

  addEventListeners()
  handleResize()
  render()

  // Create canvas
  function createCanvas(container) {
    const canvas = document.createElement('canvas')
    container.appendChild(canvas)
    return canvas
  }

  // Add listeners to each canvas
  // ** To be optimized for multiple resize handlers
  function addEventListeners() {
    window.addEventListener('resize', handleResize)
    canvas.onmousemove = handleMouseMove
  }

  function handleResize() {
    // Set displayed canvas size
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    // Set real canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    sceneManager.onWindowResize()
  }

  function handleMouseMove(event) {
    sceneManager.onMouseMove(event.clientX - window.innerWidth / 2, event.clientY - window.innerHeight / 2)
  }

  function render() {
    requestAnimationFrame(render)
    sceneManager.update()
  }
}