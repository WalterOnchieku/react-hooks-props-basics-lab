import React from "react";
import Links from "./Links";
import user from "../data/user";


function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links} />
    </div>
  );
}

export default About;
