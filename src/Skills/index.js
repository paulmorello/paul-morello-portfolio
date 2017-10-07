import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-chartkick';

class Skills extends Component {

  render() {
    return (

      <div className="skills-container">
        <h2>Skills</h2>
        <PieChart data={ this.props.skills } />
      </div>
    )
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired
}

module.exports = Skills;
