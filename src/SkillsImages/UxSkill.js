const $ = require('jquery')
import React from 'react';
import url from "../images/ipad.jpg"

const UxSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#ux').click(function(event) {

      console.log('User Experience Design')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="ux" className="skills-ux-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = UxSkill;
