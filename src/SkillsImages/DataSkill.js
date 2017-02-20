const $ = require('jquery')
import React from 'react';
import url from "../images/person.jpg"

const DataSkill = React.createClass({

  render: function() {
    return (

      <div id="data" className="skills-data-container">
        <div className="data-skills-icon">
          <i className="fa fa-line-chart fa-5x"></i>
          <h3>Data Analysis</h3>
          <p>More complicated projects require accessing real time data and accessing information. I have skills with AJAX, APIs and web scraping using Nokogiri, which allows me to gather information from across the web to create information rich websites.</p>
        </div>
      </div>
    )
  }
})

module.exports = DataSkill;