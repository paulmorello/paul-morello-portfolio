const $ = require('jquery')
import React, { Component } from 'react';

class DesignSkill extends Component {

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

      <div id="design" className="skills-design-container">
        <div className="design-skills-icon">
          <i className="fa fa-pencil fa-5x" onClick={ this.changeColor }></i>
          <h3>Design</h3>
          <p>I develop fast and interactive front end websites, using the latest technologies. This website was built using React and Node. I have utilsed HTML5, CSS3/SASS, JavaScript and jQuery to accomplish modern websites with simplistic, yet effective designs.</p>
        </div>
      </div>
    )
  }
}

module.exports = DesignSkill;
