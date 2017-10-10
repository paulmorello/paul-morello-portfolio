import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <GetResume
          validateEmailAddress={ this.props.validateEmailAddress } />
        <ArrowDown />
      </div>
    )
  }
}

LandingPage.propTypes = {
  validateEmailAddress: PropTypes.func
}

export default LandingPage;
