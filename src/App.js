import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ThreeContainer from './components/ThreeContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <ThreeContainer />
          <ThreeContainer />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
