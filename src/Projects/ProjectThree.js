import React, { Component } from 'react';
import url from "../images/tic-tac-toe-ux.png"

class ProjectThree extends Component {

  render() {
    return (

      <div className="project-three-container">
        <a href="https://paulmorello.github.io/tic-tac-toe/"><img
          src={url} /></a>
        <a href="https://paulmorello.github.io/tic-tac-toe/"><h6>Classic Tic-Tac-Toe game with JavaScript and jQuery</h6></a>
      </div>
    )
  }
}

module.exports = ProjectThree;
