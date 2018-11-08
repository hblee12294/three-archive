import React, { Component } from 'react'
import './Main.css'

import ThreeContainer from './ThreeContainer'

import Pier from '../three/Pier/Pier'

class Main extends Component {
  render() {
    return (
      <main>
        <ThreeContainer model={ Pier } />
        <ThreeContainer model={ Pier } />
      </main>
    )
  }
}

export default Main