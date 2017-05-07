import React, { Component } from 'react';


class NavLinks extends Component {
  propTypes: {
    about: React.PropTypes.string,
    projects: React.PropTypes.string,
    hireme: React.PropTypes.string
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

NavLinks.defaultProps = {
  about: "About Me",
  projects: "Projects",
  hireme: "Hire Me"
}

module.exports = NavLinks;
