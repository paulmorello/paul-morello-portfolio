const $ = require('jquery')
import React, { Component } from 'react';

class UxSkill extends Component {

  render() {
    return (

      <div id="ux" className="skills-ux-container">
        <div className="ux-skills-icon">
          <i className="fa fa-user-circle fa-5x"></i>
          <h3>User Experience</h3>
          <p>I build easy to use websites, based on research and UX principles. I aim to show the most important details by wireframing, prototyping and gathering user feedback to develop user stories and user journey maps. An important step in the design process.</p>
        </div>
      </div>
    )
  }
}

module.exports = UxSkill;
