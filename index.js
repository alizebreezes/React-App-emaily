const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// express tells to Node.js "I want to listen to port 5000"
