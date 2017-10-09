import React, { Component } from 'react';
import HeroHeader from './HeroHeader';
import ArrowDown from './ArrowDown';
import NavBar from './NavBar';
import GetResume from './GetResume';

class LandingPage extends Component {

  render() {
    return (
      <div className="header-container">
        <nav id="nav-fix">
          <h1>PM</h1>
          <NavBar />
        </nav>
        <HeroHeader />
        <GetResume />
        <ArrowDown />
      </div>
    )
  }
}

export default LandingPage;
