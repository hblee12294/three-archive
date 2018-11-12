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
          <div className="info-icon"></div>
          <div className="marquee">
            <div className="marquee-inner">
              <span className="left-line">{ this.props.description }</span>
              <span className="right-line">{ this.props.description }</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
