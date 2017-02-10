import React from 'react';
import url from "../images/speedcoder-ux.png"

const ProjectTwo = React.createClass({

  render: function() {
    return (

      <div className="project-two-container">
        <a href="https://www.speedcoder.herokuapp.com"><img
          src={url} /></a>
      </div>
    )
  }
})

module.exports = ProjectTwo;
