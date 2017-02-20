const $ = require('jquery')
import React from 'react';
import url from "../images/business.jpg"

const BackendSkill = React.createClass({

  render: function() {
    return (

      <div id="backend" className="skills-backend-container">
        <div className="backend-skills-icon">
          <i className="fa fa-database fa-5x"></i>
          <h3>BackEnd Development</h3>
          <p>To accompany my front end skills, I am also fully equipped with back end knowledge. I am skilled with Ruby on Rails, PostgreSQL, SQL and task management tools such as Git and Webpack. Allowing me to manage the development of a project from end-to-end.</p>
        </div>
      </div>
    )
  }
})

module.exports = BackendSkill;
