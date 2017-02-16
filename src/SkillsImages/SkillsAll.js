const $ = require('jquery')
import React from 'react';
import UxSkill from './UxSkill'
import BackendSkill from './BackendSkill'
import LiveDataSkill from './LiveDataSkill'
import DataSkill from './DataSkill'
import ResSkill from "./ResSkill"
import ResearchSkill from "./ResearchSkill"
import DesignSkill from './DesignSkill'
import WireframingSkill from './WireframingSkill'

const SkillsAll = React.createClass({

  render: function() {
    return (

      <div id="skills" className="skills-container">
        <h2>Skills</h2>
        <UxSkill
          onClick={ this.props.onImgClick } />
        <LiveDataSkill
          onClick={ this.props.onImgClick } />
        <ResSkill
          onClick={ this.props.onImgClick } />
        <ResearchSkill
          onClick={ this.props.onImgClick } />
        <DataSkill
          onClick={ this.props.onImgClick } />
        <BackendSkill
          onClick={ this.props.onImgClick } />
        <DesignSkill
          onClick={ this.props.onImgClick } />
        <WireframingSkill
          onClick={ this.props.onImgClick } />
      </div>
    )
  }
})

module.exports = SkillsAll;
