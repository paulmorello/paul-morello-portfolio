import React from 'react';
var url = require("file-loader!../images/tic-tac-toe-ux.png")

const ProjectThree = React.createClass({

  render: function() {
    return (

      <div className="project-three-container">
        <img
          src={url} />
        <h2>Tic-Tac-Toe</h2>
      </div>
    )
  }
})

module.exports = ProjectThree;
