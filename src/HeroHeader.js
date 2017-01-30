import React from 'react';
import MainHeader from './MainHeader'

const HeroHeader = React.createClass({

  render: function() {
    return (
      <div className="hero-header-container">
        <MainHeader />
      </div>
    )
  }
})

module.exports = HeroHeader;
