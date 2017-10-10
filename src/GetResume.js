import React, { Component } from 'react';
import PropTypes from 'prop-types';


class GetResume extends Component {

  // getEmailAddress = () => {
  //   let email = document.getElementById("resume-input").value
  //   return email;
  // }

  render() {

    return (
      <div className="header-resume-container">
        <input id="resume-input" type="email" placeholder="Enter Email To Get My Resume" />
        <button onClick={ this.props.validateEmailAddress() }>Get Resume</button>
      </div>
    )
  }

}

GetResume.propTypes = {
  validateEmailAddress: PropTypes.func
}

export default GetResume;
