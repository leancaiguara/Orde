const express = require("express");
const session = require("express-session");
const passport = require("passport");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const client = require("./config/db");
const routes = require("./routes/index");

//init
const app = express();

//config
require("dotenv").config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(volleyball);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600 * 24 * 60 * 60 * 365,
    },
  })
);
//routes
app.use("/api", routes);

//server
const PORT = process.env.PORT;
client
  .then(() => {
    app.listen(PORT, () => {
      console.log("server corriendo en puerto", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
