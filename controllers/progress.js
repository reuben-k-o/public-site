exports.getProgress = (req, res, next) => {
  res.render("progress/personal-dashboard", {
    path: "/progress",
    pageTitle: "Personal Dashboard",
  });
};

exports.getAdminProgress = (req, res, next) => {
  res.render("progress/admin-dashboard", {
    path: "admin/progress",
    pageTitle: "Admin Dashboard",
  });
};

exports.getProject = (req, res, next) => {
  res.render("progress/project", {
    path: "project",
    pageTitle: "Project",
  });
};
