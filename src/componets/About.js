import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
      Hello, I'm Cody. I'm a Full Stack Web Developer from Columbus, OH.
      </p>
      <p className="content">
      Hello World! I'm Cody Webb, a Full Stack Web Developer based out of Columbus, Ohio. I used to work in the finance sector managing client's financial portfolios, loan processing, and underwriting, but now I work with code! From front-end to back-end, I'm passionate about developing new applications that are well written, user friendly, and expand upon today's current technology.
      Combining my education and array of experience, I strive to develop projects that are effective and meet the user's vision. I am enthusiastic about turning complex problems into simple intuitive solutions. From wireframe to deployment, I enjoy the process and troubleshooting it takes to see a project completed. Besides coding, I enjoy watching sports, going to the gym, and traveling to new places!
      Please feel free to look at some of my work displayed below. My GitHub, LinkedIn, and email are linked below in the contact section, and if you'd like to take a look at my resume just click on the 'My Resume' button at the top!
      </p>
    </div>
  );
}

export default About;