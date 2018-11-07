import React, { Component } from 'react'

import Header from './components/Header'
import Scenes from './components/Scenes'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scenes />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
