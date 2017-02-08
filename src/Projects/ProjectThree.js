import React from 'react';
import url from "../images/tic-tac-toe-ux.png"

const ProjectThree = React.createClass({

  render: function() {
    return (

      <div className="project-three-container">
        <a href="https://paulmorello.github.io/tic-tac-toe/"><img
          src={url} /></a>
        <h3><a href="https://paulmorello.github.io/tic-tac-toe/">Tic-Tac-Toe</a></h3>
      </div>
    )
  }
})

module.exports = ProjectThree;
