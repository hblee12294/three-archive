class ThreeConstructor {
  constructor(container) {
    this.container = container
    this.el = this.createCanvas(container)
  }

  createCanvas() {
    const canvas = document.createElement('canvas')
    this.container.appendChild(canvas)

    return canvas
  }

  addResizeHandler(onWindowResize) {
    (this.handleWindowResize = this.handleWindowResize.bind(this, onWindowResize))()

    window.addEventListener('resize', this.handleWindowResize)
  }

  addMouseMoveHandler(onMouseMove) {
    this.handleMouseMove = this.handleMouseMove.bind(this, onMouseMove)

    this.el.addEventListener('mousemove', this.handleMouseMove)
  }

  // 'event' will be passed as the last parameter. Not used here
  handleWindowResize(onWindowResize) {
    const el = this.el

    el.style.width = '100%'
    el.style.height = '100%'

    // Set real canvas size
    el.width = el.offsetWidth
    el.height = el.offsetHeight

    onWindowResize()
  }

  handleMouseMove(onMouseMove, event) {
    onMouseMove(
      event.clientX - window.innerWidth / 2,
      event.clientY - window.innerHeight / 2
    )
  }

  destroy() {
    window.removeEventListener('resize', this.handleWindowResize)
    this.el.removeEventListener('mousemove', this.handleMouseMove)
  }
}

export default ThreeConstructor
