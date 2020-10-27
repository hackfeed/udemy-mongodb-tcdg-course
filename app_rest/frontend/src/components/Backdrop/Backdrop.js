import "./Backdrop.css";

import React from "react";

const backdrop = (props) =>
  <div className={props.show ? "backdrop show" : "backdrop"} />;

export default backdrop;
