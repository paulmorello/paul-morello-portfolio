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
    ],
    colors: [
      "#153F9E", // Dark Blue
      "#1C76C7", // Medium Blue
      "#31C76C", // Baby Blue
      "#2193BB"  // Teal
    ]
  }

  render() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
        <ProjectsAll />
        <Skills
          skills={ this.state.skills }
          colors={ this.state.colors } />
        <Footer />
      </div>
    )
  }
}

module.exports = App;
