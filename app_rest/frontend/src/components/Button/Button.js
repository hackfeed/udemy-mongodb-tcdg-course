import "./Button.css";

import React from "react";

const button = (props) =>
  <button className="button" {...props}>{props.children}</button>;

export default button;
