const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// express tells to Node.js "I want to listen to port 5000"
