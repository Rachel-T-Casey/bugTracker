
const express = require("express");

const PORT = process.env.PORT || 8081;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  app.post("/api/users/register", (req, res) => {
    console.log("Registering user");
    console.log(req.body);
  });
});

// API to register a new user
