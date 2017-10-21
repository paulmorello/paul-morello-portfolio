import React, { Component } from 'react';

class Slogan extends Component {

  render() {
    return (
      <h5 className="main-heading-slogan">{ this.props.skills }</h5>
    )
  }
}

Slogan.propTypes = {
  skills: React.PropTypes.string
}

Slogan.defaultProps = {
  skills: "Product Manager. Data Analytics. Ruby. JavaScript. React."
}

export default Slogan;
