import React, { Component } from 'react'
import './Main.css'

import ThreeContainer from './ThreeContainer'

import Pier from '../three/Pier/Pier'
import GradientIcosahedron from '../three/GradientIcosahedron/GradientIcosahedron'

class Main extends Component {
  render() {
    return (
      <main>
        <ThreeContainer model={ Pier } />
        <ThreeContainer model={ GradientIcosahedron } />
      </main>
    )
  }
}

export default Main