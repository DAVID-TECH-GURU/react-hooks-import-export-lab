import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

import React from 'react';

const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}
import { image } from '../data/user';
const About = () => {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About;
