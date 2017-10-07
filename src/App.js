import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ProjectsAll from './Projects/ProjectsAll'
import Footer from './Footer'

class App extends Component {

  state = {
    skills: [
      ['Product Management', 25],
      ['Data Analysis', 35],
      ['Coding', 20],
      ['Customer Success', 20]
    ]
  }

  render() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
        <ProjectsAll />
        <Skills
          skills={ this.state.skills } />
        <Footer />
      </div>
    )
  }
}

module.exports = App;
