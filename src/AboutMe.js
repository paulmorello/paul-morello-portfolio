import React, { Component } from 'react';
import url from "./images/paul.png"


class AboutMe extends Component {

  render() {
    return (

      <div id="about" className="about-container">
        <div className="about-img-container">
          <img
            src={url} />
        </div>

        <div className="about-content-container">
          <h2>About Me</h2>
          <p>Passionate about building products, I'm continually developing new ideas and embracing new technologies.</p>

          <p>I'm experienced integrating complex analytical solutions to assist in the launch, iteration and overall strategy of new products.</p>

          <p>I use my analytical skillset to priortize feature implementation, and to automate workflows based on behavioural and demographic insights.</p>

        </div>
      </div>
    )
  }
}

export default AboutMe;
