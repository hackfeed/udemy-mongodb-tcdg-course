import "./Input.css";

import React from "react";

const input = (props) => {
  let inputElement = <input {...props.config} onChange={props.onChange} />;
  if (props.elType === "textarea") {
    inputElement = <textarea {...props.config} onChange={props.onChange} />;
  }
  return (
    <div className="input">
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
