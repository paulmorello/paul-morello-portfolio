import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-chartkick';
import SkillsChart from './SkillsChart';

class Skills extends Component {

  render() {
    return (
      <div className="skills-container">
        <SkillsChart
          skills={ this.props.skills }
          options={ this.props.options } />
      </div>
    )
  }
}

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  options: PropTypes.object
}

module.exports = Skills;
