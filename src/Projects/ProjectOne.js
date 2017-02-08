import React from 'react';
import url from "../images/red-prop-ux.png"

const ProjectOne = React.createClass({

  render: function() {
    return (

      <div className="project-one-container">
        <a href="https://www.redproperty.herokuapp.com"><img
          src={url} /></a>
        <h3><a href="https://www.redproperty.herokuapp.com">Red Property</a></h3>
      </div>
    )
  }
})

module.exports = ProjectOne;
