import React, { Component } from 'react';
import MainHeader from './MainHeader'
import Slogan from './Slogan'
import ArrowDown from './ArrowDown'

class HeroHeader extends Component {

  render() {
    return (
      <div className="hero-header-container">
        <MainHeader />
        <Slogan />
      </div>
    )
  }
}

module.exports = HeroHeader;
