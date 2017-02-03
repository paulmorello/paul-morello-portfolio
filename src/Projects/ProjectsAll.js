import React from 'react';
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'
import ProjectFour from './ProjectFour'

const ProjectsAll = React.createClass({

  render: function() {
    return (

      <div className="project-container">
        <h2>Recent Projects</h2>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
      </div>
    )
  }
})

module.exports = ProjectsAll;
