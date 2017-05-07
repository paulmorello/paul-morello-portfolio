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
        <UxSkill />
        <DataSkill />
        <BackendSkill />
        <DesignSkill />
      </div>
    )
  }
}

module.exports = SkillsAll;
