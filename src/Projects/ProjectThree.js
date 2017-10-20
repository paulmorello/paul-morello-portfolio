import React, { Component } from 'react';
import url from "../images/proscout.png"

class ProjectThree extends Component {

  trackClick() {

    // Tracking clicks on Tic Tac Toe game
    woopra.track('project_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'ProScout App'
    })

  }

  render() {
    return (

      <div className="project-three-container" onClick={ this.trackClick } >
        <a href="http://www.proscoutapp.com"><img
          src={url} /></a>
      </div>
    )
  }
}

export default ProjectThree;
