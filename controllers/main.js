exports.getIndex = (req, res, next) => {
  res.render("main/index", {
    pageTitle: "Home",
    path: "/",
  });
};

exports.getContact = (req, res, next) => {
  res.render("main/contact", {
    path: "/contact",
    pageTitle: "Contact Page",
  });
};

exports.getAbout = (req, res, next) => {
  res.render("main/about", {
    path: "about",
    pageTitle: "About Page",
  });
};

exports.getApplication = (req, res, next) => {
  res.render("main/application", {
    path: "application",
    pageTitle: "Application Page",
  });
};
