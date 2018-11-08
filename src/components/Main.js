import React, { Component } from 'react'
import './Main.css'

import ThreeContainer from './ThreeContainer'

// tree scenes lists
import threeObj from '../three/threeEntryPoint'

class Main extends Component {
  render() {
    return (
      <main>
        <ThreeContainer three={ threeObj } />
        <ThreeContainer three={ threeObj } />
      </main>
    )
  }
}

export default Main