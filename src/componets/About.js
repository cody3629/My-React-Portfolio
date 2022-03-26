import React from "react";
import Me from '../assets/me.jpg';

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={Me} alt="Cody Webb"/>
      <p className="content is-italic mt-4">
      Hello, I'm Cody. I'm a Full Stack Web Developer from Columbus, OH.
      </p>
      <p className="content">
      Hello World! I'm Cody Webb, a Full Stack Web Developer based out of Columbus, Ohio. I used to work in the finance sector managing client's financial portfolios, loan processing, and underwriting, but now I work with code! From front-end to back-end, I'm passionate about developing new applications that are well written, user friendly, and expand upon today's current technology.
      Combining my education and array of experience, I strive to develop projects that are effective and meet the user's vision. I am enthusiastic about turning complex problems into simple intuitive solutions. From wireframe to deployment, I enjoy the process and troubleshooting it takes to see a project completed. Besides coding, I enjoy watching sports, going to the gym, and traveling to new places!
      </p>
    </div>
  );
}

export default About;