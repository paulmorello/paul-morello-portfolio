import React, { Component } from 'react';
import url from "../images/red-prop-ux.png"

class ProjectOne extends Component {

  render() {
    return (

      <div className="project-one-container">
        <a href="https://redproperty.herokuapp.com/"><img
          src={url} /></a>
        <a href="https://redproperty.herokuapp.com/"><h6>Australian Real Estate aggregator</h6></a>
      </div>
    )
  }
}

module.exports = ProjectOne;
