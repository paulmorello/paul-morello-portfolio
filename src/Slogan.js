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
  skills: "Product Manager. Data Analytics. Ruby. JavaScript. React."
}

module.exports = Slogan;
