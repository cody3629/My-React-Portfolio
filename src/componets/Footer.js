import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Portfolio</strong>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/cody-webb-6041a718b/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a
            href="https://github.com/cody3629"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>{" "}
          {" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;