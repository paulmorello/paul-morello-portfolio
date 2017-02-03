import React from 'react';
var url = require("file-loader!../images/speedcoder-ux.png")

const ProjectTwo = React.createClass({

  render: function() {
    return (

      <div className="project-two-container">
        <a href="https://www.speedcoder.herokuapp.com"><img
          src={url} /></a>
        <h3><a href="https://www.speedcoder.herokuapp.com">SpeedCoder</a></h3>
      </div>
    )
  }
})

module.exports = ProjectTwo;
