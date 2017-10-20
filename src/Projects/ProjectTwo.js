import React, { Component } from 'react';
import url from "../images/speedcoder.png"

class ProjectTwo extends Component {

  trackClick() {

    // Tracking clicks on speedcoder Views
    woopra.track('project_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'SpeedCoder'
    })

  }

  render() {
    return (

      <div className="project-two-container" onClick={ this.trackClick } >
        <a href="https://speedcoder.herokuapp.com/"><img
          src={url} /></a>
      </div>
    )
  }
}

export default ProjectTwo;
