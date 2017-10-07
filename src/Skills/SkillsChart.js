import React from 'react';
import { PieChart } from 'react-chartkick';
import PropTypes from 'prop-types';

const SkillsChart = props =>
  <div className="skillschart-container">
    <PieChart
      data={ props.skills }
      colors={ props.options.colors }
      donut={ props.options.donut }
      legend={ props.options.legend } />
  </div>

SkillsChart.propTypes = {
  skills: PropTypes.array.isRequired,
  options: PropTypes.object
}

export default SkillsChart;
