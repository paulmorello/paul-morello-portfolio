import React, { Component } from 'react';
import url from "../images/speedcoder-ux.png"

class ProjectTwo extends Component{

  trackClick() {
    console.log('This click works');

    // Tracking clicks on speedcoder Views
    woopra.track('speedcoder_view', {
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
        <a href="https://speedcoder.herokuapp.com/"><h6>Typing test for developers</h6></a>
      </div>
    )
  }
}

module.exports = ProjectTwo;
