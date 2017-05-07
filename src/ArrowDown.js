import React, { Component } from 'react'

class ArrowDown extends Component {

  render() {
    return (
      <div className="header-arrow-container">
        <a href="#about"><i className="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></a>
      </div>
    )
  }
}

module.exports = ArrowDown;
