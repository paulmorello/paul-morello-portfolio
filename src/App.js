import React from 'react';
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import ProjectsAll from './Projects/ProjectsAll'
require('./App.css');
require('./Reset.css');

const App = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
        <ProjectsAll />
      </div>
    )
  }
})

module.exports = App;
