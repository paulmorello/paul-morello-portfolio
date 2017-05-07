import React, { Component } from 'react';

class Slogan extends Component {
  propTypes: {
    skills: React.PropTypes.string
  }

  render() {
    return (
      <h5 className="main-heading-slogan">{ this.props.skills }</h5>
    )
  }
}

Slogan.defaultProps = {
  skills: "Ruby on Rails. JavaScript. React. Node. HTML. CSS."
}

module.exports = Slogan;
