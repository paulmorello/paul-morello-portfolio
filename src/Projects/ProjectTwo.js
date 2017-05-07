import React, { Component } from 'react';
import url from "../images/speedcoder-ux.png"

class ProjectTwo extends Component{

  render() {
    return (

      <div className="project-two-container">
        <a href="https://speedcoder.herokuapp.com/"><img
          src={url} /></a>
        <a href="https://speedcoder.herokuapp.com/"><h6>Typing test for developers</h6></a>
      </div>
    )
  }
}

module.exports = ProjectTwo;
