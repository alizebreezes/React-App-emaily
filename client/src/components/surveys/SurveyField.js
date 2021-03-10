// contains logic to render a single label and text input
import React from "react";

// event handler from redux-form
//instead wrting all the meta props, just do "...input"
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <section className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </section>
    </div>
  );
};
