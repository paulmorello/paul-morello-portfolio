import React, { Component } from 'react';
import url from "../images/wdi-conf-ux.png"

class ProjectFour extends Component {

  trackClick() {
    console.log('This click works');

    // Tracking clicks on WDI Conference Link
    woopra.track('wdi_conf_view', {
      url: window.location.pathname,
      title: document.title,
      project: 'WDI Conference'
    })

  }

  render() {
    return (

      <div className="project-four-container" onClick={ this.trackClick } >
        <a href="https://peaceful-refuge-50829.herokuapp.com"><img
          src={url} /></a>
        <a href="https://peaceful-refuge-50829.herokuapp.com"><h6>Fully responsive web development conference site</h6></a>
      </div>
    )
  }
}

module.exports = ProjectFour;
