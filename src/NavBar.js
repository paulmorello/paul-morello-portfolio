import React from 'react';
import HeroHeader from './HeroHeader'

const NavBar = React.createClass({

  render: function() {
    return (

      <div className="header-container">
        <nav>
          <h1>PM</h1>
          <ul>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Hire Me</a></li>
          </ul>
        </nav>
        <HeroHeader />
      </div>
    )
  }
})

module.exports = NavBar;
