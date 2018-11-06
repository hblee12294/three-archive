import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import ThreeContainer from './components/ThreeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ThreeContainer />
        <ThreeContainer />
      </div>
    )
  }
}

export default App
