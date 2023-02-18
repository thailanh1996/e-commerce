import React from "react";

function Helmet(props) {
  const { title, children } = props;
  document.title = "Maltimart - " + title;

  return <div className="w-100">{children}</div>;
}

export default Helmet;
