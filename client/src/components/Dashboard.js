import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div className="container">
      <section>
        <header>
          <h2 className="center">Dashboard</h2>
        </header>
      </section>
      <section>
        <SurveyList />
      </section>
      <div className="fixed-action-btn">
        <Link to="surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
