import React from 'react';
import NavBar from './NavBar'
import AboutMe from './AboutMe'
require('./App.css');
require('./Reset.css');

const App = React.createClass({

  render: function() {
    return (
      <div className="main-container">
        <NavBar />
        <AboutMe />
      </div>
    )
  }
})

module.exports = App;
