import React, { Component } from 'react';
import url from "../images/wdi-conf-ux.png"

class ProjectFour extends Component {

  render() {
    return (

      <div className="project-four-container">
        <a href="https://peaceful-refuge-50829.herokuapp.com"><img
          src={url} /></a>
        <a href="https://peaceful-refuge-50829.herokuapp.com"><h6>Fully responsive web development conference site</h6></a>
      </div>
    )
  }
}

module.exports = ProjectFour;
