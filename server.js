// Server framework Konektron LOs

const express = require('express');

const app = express();

// Route
app.use("/app", require("./src/routes"));

app.listen(3000);