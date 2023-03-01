const express = require("express");
const swaggerUI = require("swagger-ui-express");
const router = require("./routes/students.js");

const swaggerDocument = require("./config/swagger.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/students", router);
app.get("/api", (req, res) => res.send("Welcome to my API!!!"));
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route")
);

app.listen(port, () => console.log(`server is running on port ${port}`));
