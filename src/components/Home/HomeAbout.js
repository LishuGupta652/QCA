import React from "react";
import { APP_NAME, HEADLINE_1 } from "../../config";

const HomeAbout = () => {
  return (
    <div className="home_about">
      <h1>
        Welcome to <span className="app_name">{APP_NAME} </span>
      </h1>

      <p>{HEADLINE_1}</p>
    </div>
  );
};

export default HomeAbout;
