"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const environements = require("./environements");
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const productRoutes = require("./routes/product-routes")
const error = require("./middleware/error");
const winston = require("winston");
const app = express();

require("./startup/config")();
require("./startup/db")();
require("./startup/logging")();
require("./startup/validation")();


app.use(express.json());
app.use(
  cors({
    Credentials: true,
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  })
);
app.use(bodyParser.json());

app.use("/api", userRoutes.routes);
app.use("/api", authRoutes.routes);
app.use("/api", productRoutes.routes);
app.use(error);

app.listen(8000, () =>
  winston.info("App listening on url: http://localhost:" + environements.port)
);
