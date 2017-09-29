import React, { Component } from 'react';
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'
import ProjectFour from './ProjectFour'

class ProjectsAll extends Component {

  render() {
    return (

      <div id="projects" className="project-container">
        <h2>Recent Projects</h2>
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
        <ProjectOne />
      </div>
    )
  }
}

module.exports = ProjectsAll;
