const $ = require('jquery')
import React from 'react';
import url from "../images/person.jpg"

const DataSkill = React.createClass({

  getInitialState: function() {
    return {
      content: '',
    }
  },

  onImgClick: function(event) {
    // trigger for skills pictures
    $('#data').click(function(event) {

      console.log('SQL, data, ORM, PostgreSQL, MongoDB')

    });
  },

  handleClick: function(event) {
    this.setState({ content: event.target.value });
  },

  render: function() {
    return (

      <div id="data" className="skills-data-container">
        <img
          onClick={ this.onImgClick }
          src={url} />
      </div>
    )
  }
})

module.exports = DataSkill;
