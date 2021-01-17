const express = require("express");
require("./services/passport");
const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// express tells to Node.js "I want to listen to port 5000"
