import React from 'react';
import Ipad from "./images/ipad.jpg"
import Business from "./images/business.jpg"
import Melbourne from "./images/melbourne.jpg"
import Person from "./images/person.jpg"
import Apple from "./images/apple.jpg"
import Workplace from "./images/workplace.jpg"
import CoffeeBreak from "./images/prototyping.jpg"
import Whiteboard from "./images/whiteboard.jpg"

const Skills = React.createClass({

  render: function() {
    return (

      <div id="skills" className="skills-container">
        <img
          src={Ipad} />
        <img
          src={Melbourne} />
        <img
          src={Apple} />
        <img
          src={Workplace} />
        <img
          src={Person} />
        <img
          src={Business} />
        <img
          src={CoffeeBreak} />
        <img
          src={Whiteboard} />
      </div>
    )
  }
})

module.exports = Skills;
