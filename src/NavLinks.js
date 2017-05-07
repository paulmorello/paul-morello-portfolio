import React, { Component } from 'react';


class NavLinks extends Component {
  propTypes: {
    about: React.PropTypes.string.isRequired,
    projects: React.PropTypes.string.isRequired,
    hireme: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <ul>
        <li><a href="#about">{ this.props.about }</a></li>
        <li><a href="#projects">{ this.props.projects }</a></li>
        <li><a href="#footer">{ this.props.hireme }</a></li>
      </ul>
    )
  }
}

module.exports = NavLinks;
