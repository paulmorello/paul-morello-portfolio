import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import SkillsAll from './SkillsImages/SkillsAll'
import ProjectsAll from './Projects/ProjectsAll'
import Footer from './Footer'

class App extends Component {

  render() {
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
}

module.exports = App;
