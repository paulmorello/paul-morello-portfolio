import React, { Component } from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ProjectsAll from './Projects/ProjectsAll';
import Footer from './Footer';

class App extends Component {

  state = {
    skills: [
      ["Product Management", 25],
      ["Data Analysis", 35],
      ["Coding", 20],
      ["Customer Success", 20]
    ],
    options: {
      title: "Breakdown of skills",
      colors: [
        "#153F9E", // Dark Blue
        "#1C76C7", // Medium Blue
        "#31C76C", // Baby Blue
        "#2193BB"  // Teal
      ],
      donut: true,
      legend: true,
      is3D: true
    }
  }

  render() {
    return (
      <div className="main-container">
        <LandingPage />
        <AboutMe />
        <Skills
          skills={ this.state.skills }
          options={ this.state.options } />
        <ProjectsAll />
        <Footer />
      </div>
    )
  }
}

module.exports = App;
