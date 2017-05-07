const $ = require('jquery')
import React, { Component } from 'react';
import url from "../images/person.jpg"

class DataSkill extends Component {

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

      <div id="data" className="skills-data-container">
        <div className="data-skills-icon">
          <i className="fa fa-line-chart fa-5x" onClick={ this.changeColor }></i>
          <h3>Data Analysis</h3>
          <p>More complicated projects require accessing real time data and accessing information. I have skills with AJAX, APIs and web scraping using Nokogiri, which allows me to gather information from across the web to create information rich websites.</p>
        </div>
      </div>
    )
  }
}

module.exports = DataSkill;
