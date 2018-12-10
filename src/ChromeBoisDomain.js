import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX
    let y = event.clientY    
    return drawChromeBoiAtCoords(x,y)
  }
  
  handletoggleCycling = (event) => {
    return toggleCycling()
  }

  handleKeyPress = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
  
  render() {
    return (
        <canvas 
          onKeyPress={this.handleKeyPress}
          onMouseMove={this.handleMouseMove}
          onClick={this.handletoggleCycling}
          width='900'
          height='600'
          tabIndex="0">
        </canvas>
    )
  }
}
