const $ = require('jquery')
import React from 'react';
import url from "../images/apple.jpg"

const ResSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#responsive').click(function(event) {

      console.log('responsive web design')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="responsive" className="skills-responsive-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = ResSkill;
