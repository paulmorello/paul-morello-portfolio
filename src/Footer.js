import React, { Component } from 'react';
import NavLinks from './NavLinks'

class Footer extends Component {

  render() {
    return (
      <div id="footer" className="footer-container">
        <div className="footer-links-container">
          <NavLinks />
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
}

module.exports = Footer;
