import React from 'react';
import url from "../images/red-prop-ux.png"

const ProjectOne = React.createClass({

  render: function() {
    return (

      <div className="project-one-container">
        <a href="https://redproperty.herokuapp.com/"><img
          src={url} /></a>
        <a href="https://redproperty.herokuapp.com/"><h6>Australian Real Estate aggregator</h6></a>
      </div>
    )
  }
})

module.exports = ProjectOne;
