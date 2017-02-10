import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ProjectsAll from './Projects/ProjectsAll'
import Footer from './Footer'
require('./App.css');
require('./Reset.css');

const App = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
        <Skills />
        <ProjectsAll />
        <Footer />
      </div>
    )
  }
})

module.exports = App;
