const $ = require('jquery')
import React from 'react';
import url from "../images/business.jpg"

const BackendSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#backend').click(function(event) {

      console.log('Ruby on rails, Node.js and Express.js')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="backend" className="skills-backend-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = BackendSkill;
