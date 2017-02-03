import React from 'react';
var url = require("file-loader!../images/speedcoder-ux.png")

const ProjectTwo = React.createClass({

  render: function() {
    return (

      <div className="project-two-container">
        <img
          src={url} />
        <h2>SpeedCoder</h2>
      </div>
    )
  }
})

module.exports = ProjectTwo;
