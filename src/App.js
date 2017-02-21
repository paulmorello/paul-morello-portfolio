import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import SkillsAll from './SkillsImages/SkillsAll'
import ProjectsAll from './Projects/ProjectsAll'
import Footer from './Footer'

const App = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
        <ProjectsAll />
        <SkillsAll />
        <Footer />
      </div>
    )
  }
})

module.exports = App;
