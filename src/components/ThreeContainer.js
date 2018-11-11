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
          ref={element => (this.threeRootElement = element)}
        >
          <div className="info-icon">I</div>
          <div className="marquee">
            <div className="marquee-inner">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
