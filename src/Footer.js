import React from 'react';

const Footer = React.createClass({

  render: function() {
    return (
      <div className="footer-container">
        <div className="footer-links-container">
          <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Hire Me</a></li>
          </ul>
        </div>
        <div className="footer-content-container">
          <h2>Contact Me</h2>
          <p>This fully responsive website was developed and is maintained by me.
          I used React, Node, JavaScript, HTML and CSS to build this single page
          app. This helps to avoid page refreshes and provides a better User
          Experience (UX) for you.</p>
          <p>If you would like to discuss a project or potential opportunity,
          I would love to hear from you.</p>
          <h4>paulmorello1@gmail.com</h4>
        </div>
      </div>
    )
  }
})

module.exports = Footer;
