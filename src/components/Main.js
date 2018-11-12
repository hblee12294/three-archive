import React, { Component } from 'react'
import './Main.css'

import ThreeContainer from './ThreeContainer'

import Pier from '../three/Pier/Pier'
import GradientIcosahedron from '../three/GradientIcosahedron/GradientIcosahedron'
import Twist from '../three/Twist/Twist'

const modelList = [{
  name: 'GradientIcosahedron',
  model: GradientIcosahedron,
  description: 'geometry - icosahedron   material - meshphong   light - directional   effect - rotation'
}, {
  name: 'Pier',
  model: Pier, // with longest description
  description: 'geometry - icosahedron, edges   material - meshstandard, linebasic   light - point   effect - scale'
}, {
  name: 'Twist',
  model: Twist,
  description: 'geometry - cube   material - meshnormal    light - none   effect - rotation, twist'
}]

class Main extends Component {
  render() {
    const ThreeContainerList = modelList.map(item =>
      <ThreeContainer
        key={ item.name }
        model={ item.model }
        description={ item.description }
      />
    )

    return (
      <main>
        { ThreeContainerList }
      </main>
    )
  }
}

export default Main