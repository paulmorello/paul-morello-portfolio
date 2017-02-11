const $ = require('jquery')
import React from 'react';
import url from "../images/workplace.jpg"

const ResearchSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#research').click(function(event) {

      console.log('research')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="research" className="skills-research-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = ResearchSkill;
