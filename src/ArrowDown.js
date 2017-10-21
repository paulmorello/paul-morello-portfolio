import React, { Component } from 'react'

class ArrowDown extends Component {

  trackClick() {
    // Tracking clicks on Navbar Links
    woopra.track('Site View', {
      url: window.location.pathname,
      title: document.title,
      section: 'About'
    })
  }

  render() {
    return (
      <div
      className="header-arrow-container"
      onClick={ this.trackClick } >
        <a href="#about"><i className="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></a>
      </div>
    )
  }
}

export default ArrowDown;
