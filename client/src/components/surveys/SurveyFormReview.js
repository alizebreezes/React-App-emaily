import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions/index";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <section>{formValues[name]}</section>
      </div>
    );
  });

  return (
    <div>
      <h5>Review Your Form & Confirm</h5>
      {reviewFields}
      <section style={{ marginTop: "20px" }}>
        <button className="black btn-flat white-text" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues)}
          className="blue btn-flat white-text right"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </section>
    </div>
  );
};

function mapStateProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateProps, actions)(SurveyFormReview);
