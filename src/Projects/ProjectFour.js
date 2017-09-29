import React, { Component } from 'react';
import url from "../images/defy.png"

class ProjectFour extends Component {

  trackClick() {

    // Tracking clicks on WDI Conference Link
    woopra.track('project_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'defy method'
    })
  }

  render() {
    return (

      <div className="project-four-container" onClick={ this.trackClick } >
        <a href="https://www.defymethod.com.au"><img
          src={url} /></a>
      </div>
    )
  }
}

module.exports = ProjectFour;
