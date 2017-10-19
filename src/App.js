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

  getEmailAddress = () => {
    let email = document.getElementById("resume-input");
    if (email) {
      return email.value;
    } else {
      email = "This is not a valid email address";
      return email;
    }
  }

  validateEmailAddress = () => {

    let email = this.getEmailAddress();

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(email)) {
      // identify requestor by email
      woopra.identify({
        email: email
      })
      // send event to woopra to subscribe user to Mailchimp list
      woopra.track('resume_requested', {
        email: email
      });
    }
  }

  render() {
    return (
      <div className="main-container">
        <LandingPage
          validateEmailAddress={ this.validateEmailAddress } />
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
