import React, { Component } from 'react';
import { PieChart } from 'react-chartkick';

class Skills extends Component {

  render() {
    return (

      <div className="skills-container">
        <h2>Skills</h2>
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
      </div>
    )
  }
}

module.exports = Skills;
