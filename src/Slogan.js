import React, { Component } from 'react';

class Slogan extends Component {
  propTypes: {
    skills: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <h5 className="main-heading-slogan">{ this.props.skills }</h5>
    )
  }
}

module.exports = Slogan;
