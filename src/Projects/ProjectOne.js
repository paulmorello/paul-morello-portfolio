import React, { Component } from 'react';
import url from "../images/red-prop-ux.png"

class ProjectOne extends Component {

  trackClick() {

    // Tracking clicks on Red Property Link
    woopra.track('red_property_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'Red Property'
    })

  }

  render() {
    return (

      <div className="project-one-container" onClick={ this.trackClick }>
        <a href="https://redproperty.herokuapp.com/"><img
          src={url} /></a>
        <a href="https://redproperty.herokuapp.com/"><h6>Australian Real Estate aggregator</h6></a>
      </div>
    )
  }
}

module.exports = ProjectOne;
