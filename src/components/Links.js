import React from "react";

function Links({ links }) {
  return (
    <div>
      <h3>Links</h3>
      {/* Use the links passed as props to create clickable links */}
      <a href={links.github}>GitHub</a>
      <a href={links.linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;