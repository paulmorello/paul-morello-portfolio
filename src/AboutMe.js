import React from 'react';

const AboutMe = React.createClass({

  render: function() {
    return (

      <div className="about-container">
        <div className="about-img-container">
          <img src="#" />
        </div>

        <div className="about-content-container">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
})

module.exports = AboutMe;
