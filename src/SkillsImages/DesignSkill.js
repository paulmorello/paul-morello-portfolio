const $ = require('jquery')
import React from 'react';
import url from "../images/prototyping.jpg"

const DesignSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#design').click(function(event) {

      console.log('HTML5, CSS3, JavaScript, jQuery with React')
      
    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="design" className="skills-design-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = DesignSkill;
