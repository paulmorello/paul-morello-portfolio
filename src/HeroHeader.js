import React from 'react';
import MainHeader from './MainHeader'
import Slogan from './Slogan'
import ArrowDown from './ArrowDown'

const HeroHeader = React.createClass({

  render: function() {
    return (
      <div className="hero-header-container">
        <MainHeader />
        <Slogan />
      </div>
    )
  }
})

module.exports = HeroHeader;
