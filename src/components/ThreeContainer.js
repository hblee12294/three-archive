import React, { Component } from 'react'
import threeEntryPoint from '../three/threeEntryPoint'

import './ThreeContainer.css'

export default class ThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement)
  }

  render() {
    return (
      <div className="scene-wrap">
        <div
          className="scene"
          ref={ element => this.threeRootElement = element }
        />
      </div>
    )
  }
}