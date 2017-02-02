import React from 'react';
import MainHeader from './MainHeader'
import Slogan from './Slogan'

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
