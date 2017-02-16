const $ = require('jquery')
import React from 'react';
import UxSkill from './UxSkill'
import BackendSkill from './BackendSkill'
import DataSkill from './DataSkill'
import DesignSkill from './DesignSkill'


const SkillsAll = React.createClass({

  render: function() {
    return (

      <div id="skills" className="skills-container">
        <h2>Skills</h2>
        <UxSkill
          onClick={ this.props.onImgClick } />
        <DataSkill
          onClick={ this.props.onImgClick } />
        <BackendSkill
          onClick={ this.props.onImgClick } />
        <DesignSkill
          onClick={ this.props.onImgClick } />
      </div>
    )
  }
})

module.exports = SkillsAll;
