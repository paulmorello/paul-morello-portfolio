const $ = require('jquery')
import React, { Component } from 'react';
import UxSkill from './UxSkill'
import BackendSkill from './BackendSkill'
import DataSkill from './DataSkill'
import DesignSkill from './DesignSkill'


class SkillsAll extends Component {

  render() {
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
}

module.exports = SkillsAll;
