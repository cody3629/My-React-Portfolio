import React from "react";
import Project from "./Project";



const projects = [
  {
    id: 0,
    title: "All Tech",
    languages: "Express.js, JavaScript, HTML5, CSS, Node.js, Handlebars.js, MySQL",
    image: "/img/alltech.jpg",
    description: "Web Application for posting tech related blogs that also allows a user to create an account, post blogs, comment on blogs, and delete created blogs on their account.",
    repo: "https://github.com/cody3629/tech-blog",
    live: "https://powerful-forest-60459.herokuapp.com/",
  },
  {
    id: 1,
    title: "README.md Generator",
    languages: "Node.js, JavaScript, JSON",
    image: "/img/read.jpg",
    description: "Allows you to generate a README.md file by simply answering prompts in the terminal, then the README.md is filled with your inputted answers.",
    repo: "https://github.com/cody3629/tech-blog",
  },
  {
    id: 2,
    title: "Note Taker",
    languages: "HTML5, CSS, JavaScript, Express.js",
    image: "/img/note.jpg",
    description: "Can create, save, and delete notes to help you keep track of your thoughts/stay organized.",
    live: "https://agile-forest-32357.herokuapp.com/",
    repo: "https://github.com/cody3629/note.taker",
  },
  {
    id: 3,
    title: "Team Profile Generator",
    languages: "Node.js, JavaScript, HTML5, CSS, Jest",
    image: "/img/team.jpg",
    description: "Gives the user the ability to input information about the team they are working on such as name, position, work location, and work ID to help stay organized and keep track of your team.",
    repo: "https://github.com/cody3629/Team-Profile-Generator",
  },
  {
    id: 4,
    title: "Shopping Planner",
    languages: "Node.js, Express, MySQL, JavaScript, Handlebars.js",
    image: "/img/shopping.jpg",
    description: "Allows the a user to create an account, and keep track of a shopping list to help them keep track of their spending.",
    repo: "https://github.com/wilhelmm01/shopping-list",
    live: "https://intense-anchorage-81672.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">My Work</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;