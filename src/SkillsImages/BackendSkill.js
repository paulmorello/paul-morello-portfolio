const $ = require('jquery')
import React, { Component } from 'react';
import url from "../images/business.jpg"

class BackendSkill extends Component {

  changeColor(e) {

    // random color generator
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.color = color;
  }

  render() {
    return (
      <div id="backend" className="skills-backend-container">
        <div className="backend-skills-icon">
          <i className="fa fa-database fa-5x" onClick={ this.changeColor }></i>
          <h3>BackEnd Development</h3>
          <p>To accompany my front end skills, I am also fully equipped with back end knowledge. I am skilled with Ruby on Rails, PostgreSQL, SQL and task management tools such as Git and Webpack. Allowing me to manage the development of a project from end-to-end.</p>
        </div>
      </div>
    )
  }
}

module.exports = BackendSkill;
