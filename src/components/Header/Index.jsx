import React from "react";
import "./Index.css";

const index = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>Doodle Keep</h1>
        <div className="elements">
          <a href="/about">
            <li>About</li>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default index;
