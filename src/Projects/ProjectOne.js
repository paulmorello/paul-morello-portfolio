import React from 'react';
var url = require("file-loader!../images/red-prop-ux.png")

const ProjectOne = React.createClass({

  render: function() {
    return (

      <div className="project-one-container">
        <img
          src={url} />
        <h2>Red Property</h2>
      </div>
    )
  }
})

module.exports = ProjectOne;
