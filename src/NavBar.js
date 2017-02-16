import React from 'react';
import HeroHeader from './HeroHeader'
import ArrowDown from './ArrowDown'

const NavBar = React.createClass({

  render: function() {
    return (

      <div className="header-container">
        <nav id="nav-fix">
          <h1>PM</h1>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Hire Me</a></li>
          </ul>
        </nav>
        <HeroHeader />
        <ArrowDown />
      </div>
    )
  }
})

module.exports = NavBar;
