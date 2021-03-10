// contains logic to render a single label and text input
import React from "react";
import SurveyForm from "./SurveyForm";

// event handler from redux-form
//instead wrting all the meta props, just do "...input"
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
