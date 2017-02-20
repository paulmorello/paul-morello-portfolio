const $ = require('jquery')
import React from 'react';

const DesignSkill = React.createClass({

  render: function() {
    return (

      <div id="design" className="skills-design-container">
        <div className="design-skills-icon">
          <i className="fa fa-pencil fa-5x"></i>
          <h3>Design</h3>
          <p>I develop fast and interactive front end websites, using the latest technologies. This website was built using React and Node. I have utilsed HTML5, CSS3/SASS, JavaScript and jQuery to accomplish modern websites with simplistic, yet effective designs.</p>
        </div>
      </div>
    )
  }
})

module.exports = DesignSkill;
