import React from 'react';
import url from "../images/tic-tac-toe-ux.png"

const ProjectThree = React.createClass({

  render: function() {
    return (

      <div className="project-three-container">
        <a href="https://paulmorello.github.io/tic-tac-toe/"><img
          src={url} /></a>
        <a href="https://paulmorello.github.io/tic-tac-toe/"><h6>Classic Tic-Tac-Toe game with JavaScript and jQuery</h6></a>
      </div>
    )
  }
})

module.exports = ProjectThree;
