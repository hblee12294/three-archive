import React, { Component } from 'react'
import './ThreeContainer.css'

export default class ThreeContainer extends Component {
  componentDidMount() {
    this.props.model(this.threeRootElement)
  }

  render() {
    return (
      <div className="container">
        <div
          className="three-root"
          ref={ element => this.threeRootElement = element }
        />
      </div>
    )
  }
}