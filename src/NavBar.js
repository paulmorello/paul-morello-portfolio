import React, { Component } from 'react';
import HeroHeader from './HeroHeader'
import ArrowDown from './ArrowDown'
import NavLinks from './NavLinks'

class NavBar extends Component {

  render() {
    return (
      <div className="header-container">
        <nav id="nav-fix">
          <h1>PM</h1>
          <NavLinks />
        </nav>
        <HeroHeader />
        <ArrowDown />
      </div>
    )
  }
}

module.exports = NavBar;
