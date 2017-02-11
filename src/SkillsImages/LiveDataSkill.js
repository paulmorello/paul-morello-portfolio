const $ = require('jquery')
import React from 'react';
import url from "../images/melbourne.jpg"

const LiveDataSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#web-scraping').click(function(event) {

      console.log('Ability to scrape live data using Nokogiri')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="web-scraping" className="skills-webscraping-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = LiveDataSkill;
