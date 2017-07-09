import React, { Component } from 'react';


class NavLinks extends Component {
  constructor() {
    super();
      this.state = { sectionIs: '' }

      this.trackClick = this.trackClick.bind(this);
  }

  propTypes: {
    about: React.PropTypes.string,
    projects: React.PropTypes.string,
    hireme: React.PropTypes.string
  }

  trackClick() {

    // Binding instance of this to that
    let that = this

    // delaying the track to ensure correct section is found
    setTimeout( function() {

      if (window.location.hash === '#about') {
        that.setState({ sectionIs: 'About' });
      }
      else if (window.location.hash === '#projects') {
        that.setState({ sectionIs: 'Projects' });
      }
      else {
        that.setState({ sectionIs: 'Contact Details' });
      }

      // Tracking clicks on Navbar Links
      woopra.track('Site View', {
        url: window.location.pathname,
        title: document.title,
        section: that.state.sectionIs
      })

    },100)

  }

  render() {
    return (
      <ul>
        <li
          onClick={ this.trackClick }
          ><a href="#about">{ this.props.about }</a></li>
        <li
          onClick={ this.trackClick }
          ><a href="#projects">{ this.props.projects }</a></li>
        <li
          onClick={ this.trackClick }
          ><a href="#footer">{ this.props.hireme }</a></li>
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
