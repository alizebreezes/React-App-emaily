const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>It would be great to get your Feedback to improve our service!</h3>
        <p>Please answer the following questions!</p>
        <p>${survey.body}</p>
        <span>
          <a href="${keys.redirectDomain}/api/surveys/thanks">YES</a>
        </span>
        <span>
          <a href="${keys.redirectDomain}/api/surveys/thanks">NO</a>
        </span>
        </div>
    </body>
  </html>
  `;
};
