import React, { Component } from 'react';
import url from "../images/coffee.png"

class ProjectOne extends Component {

  trackClick() {

    // Tracking clicks on Red Property Link
    woopra.track('project_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'Charley St'
    })
  }


  render() {
    return (

      <div className="project-one-container" onClick={ this.trackClick }>
        <a href="http://www.charleyst.com"><img
          src={url} /></a>
      </div>
    )
  }
}

module.exports = ProjectOne;
