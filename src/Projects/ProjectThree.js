import React from 'react';
var url = require("file-loader!../images/tic-tac-toe-ux.png")

const ProjectThree = React.createClass({

  render: function() {
    return (

      <div className="project-three-container">
        <img
          src={url} />
        <h3>Tic-Tac-Toe</h3>
      </div>
    )
  }
})

module.exports = ProjectThree;
