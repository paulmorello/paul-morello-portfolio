import React from 'react';
var url = require("file-loader!../images/wdi-conf-ux.png")

const ProjectFour = React.createClass({

  render: function() {
    return (

      <div className="project-four-container">
        <img
          src={url} />
        <h2>Web Development Conference</h2>
      </div>
    )
  }
})

module.exports = ProjectFour;
