const path = require("path");
const express = require("express");

const authRoute = require("./routes/auth");
const progressRoute = require("./routes/progress");
const adminRoute = require("./routes/admin");
const mainRoute = require("./routes/main");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(progressRoute);
app.use(mainRoute);
app.use(authRoute);

app.listen(3500);
