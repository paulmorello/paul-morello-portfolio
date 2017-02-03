import React from 'react';
var url = require("file-loader!../images/wdi-conf-ux.png")

const ProjectFour = React.createClass({

  render: function() {
    return (

      <div className="project-four-container">
        <img
          src={url} />
        <h3>Web Development Conference</h3>
      </div>
    )
  }
})

module.exports = ProjectFour;
