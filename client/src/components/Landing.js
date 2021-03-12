import React from "react";

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <section style={{ marginBottom: "35px" }}>
        <h1>Emaily</h1>
        Collect feedback form your users!
      </section>
      <section>
        <div className="row" style={{ width: "80%" }}>
          <div className="col s12 m12">
            <div className="card blue-grey">
              <div className="card-content white-text">
                <span className="card-title" style={{ marginBottom: "25px" }}>
                  <h5>Instruction to Test Survey App 📜</h5>
                </span>
                <hr style={{ marginBottom: "15px" }} />
                <section style={{ textAlign: "left" }}>
                  <span>
                    <h6>
                      <i className="material-icons left">done</i>Log in with
                      Google
                    </h6>
                  </span>
                  <span>
                    <h6>
                      <i className="material-icons left">done</i> Add Credit
                    </h6>
                    <section style={{ marginLeft: "38px" }}>
                      <p>1. Put any test email like: test@test.com</p>
                      <p>2. Use test card number: 4242 4242 4242 4242</p>
                      <p>3. Put any future date and 3 digit for CVC</p>
                      <p style={{ color: "orange" }}>
                        <strong>
                          🔝 Check the right top! You get 5 credits 💰
                        </strong>
                      </p>
                    </section>
                  </span>
                  <span>
                    <h6>
                      <i className="material-icons left">done</i>Start your
                      Survey!
                    </h6>
                    <section style={{ marginLeft: "38px" }}>
                      <p>
                        1. You will see{" "}
                        <strong
                          style={{ color: "red", backgroundColor: "white" }}
                        >
                          RED PLUS
                        </strong>{" "}
                        button on the right bottom
                      </p>
                      <p>2. Start filling the form</p>
                      <p>
                        3. Put valid email form, you can put mulitple emails
                        separate by comma(,)
                      </p>
                      <p style={{ color: "orange" }}>
                        <strong>📤 Review what you wrote and send!</strong>
                      </p>
                    </section>
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
