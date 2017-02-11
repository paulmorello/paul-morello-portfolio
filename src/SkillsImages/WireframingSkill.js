const $ = require('jquery')
import React from 'react';
import url from "../images/whiteboard.jpg"

const WireframingSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#wireframe').click(function(event) {

      console.log('Developing prototypes using whiteboarding and prototyping tools')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="wireframe" className="skills-wireframe-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = WireframingSkill;
