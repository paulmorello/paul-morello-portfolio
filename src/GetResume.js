import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GetResume extends Component {

  render() {
    return (
      <div className="header-resume-container">
        <input id="resume-input" type="email" placeholder="Enter Email To Get My Resume" />
        <button onClick={ this.props.validateEmailAddress }>Get Resume</button>
      </div>
    )
  }

}

GetResume.propTypes = {
  validateEmailAddress: PropTypes.func
}

export default GetResume;
