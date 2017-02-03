import React from 'react';
var url = require("file-loader!./images/paul.png")


const AboutMe = React.createClass({

  render: function() {
    return (

      <div className="about-container">
        <div className="about-img-container">
          <img
            src={url} />
        </div>

        <div className="about-content-container">
          <h2>About Me</h2>
          <p>I am a full stack web developer with knowledge of both front end and back end technologies.</p>

          <p>Coming from a background in Finance, I have been lucky enough to work with fast paced and growing startups such as General Assembly.</p>

          <p>My work aims to provide a quality User Experience (UX) across all digital devices to improve sales and drive profitability.</p>
        </div>
      </div>
    )
  }
})

module.exports = AboutMe;
