const path = require("path");
const express = require("express");

const rootDir = require("./util/path");
const authRoute = require("./routes/auth");
const progressRoute = require("./routes/progress");
const adminRoute = require("./routes/admin");
const mainRoute = require("./routes/main");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, "public")));

app.use(progressRoute);
app.use(mainRoute);
app.use(adminRoute);
app.use(authRoute);

app.listen(3500);
