// variables
const containerProjects = document.querySelector(".projects__container");

const assignedTasks = document.querySelector(".progress-bar__asigned");
const completeTasks = document.querySelector(".progress-bar__completed");
const activeTasks = document.querySelector(".progress-bar__active");

const userProgressContainer = document.querySelector(".users__progresses");

const activeProjects = [
  {
    projectName: "progress site",
    totalMillestones: 10,
    completed: 4,
  },
  {
    projectName: "hope center site",
    totalMillestones: 11,
    completed: 8,
  },
  {
    projectName: "e-learning",
    totalMillestones: 13,
    completed: 5,
  },
  {
    projectName: "school site template",
    totalMillestones: 10,
    completed: 6,
  },
];

// users
const users = [
  {
    username: "Jennifer Lopez",
    userEmail: "Jenniferlopez@gmail.com",
    enrolmentDate: new Date(2022, 05, 01).toISOString(),
    dateOfBirth: new Date(2000, 05, 02).toISOString(),
    comments:
      "Tech enthusiasist, cracking problems is my specialization 🔓🔓🔓",

    moduleName: "Javascript",
    moduleLectures: 320,
    currentLecture: 190,
  },
  {
    username: "Jen Watt",
    userEmail: "Jen.watt45@gmail.com",
    enrolmentDate: new Date(2022, 07, 04).toISOString(),
    dateOfBirth: new Date(2002, 05, 02).toISOString(),
    comments:
      "Tech enthusiasist, cracking problems is my specialization 🔓🔓🔓",
    moduleName: "React",
    moduleLectures: 320,
    currentLecture: 250,
  },
  {
    username: "Calebson Matt",
    userEmail: "csmatt43@gmail.com",
    enrolmentDate: new Date(2022, 05, 07).toISOString(),
    dateOfBirth: new Date(2001, 05, 23).toISOString(),
    comments:
      "Tech enthusiasist, cracking problems is my specialization 🔓🔓🔓",
    moduleName: "TypeScript",
    moduleLectures: 320,
    currentLecture: 70,
  },
  {
    username: "Tylor swift",
    userEmail: "ts450@gmail.com",
    enrolmentDate: new Date(2022, 05, 01).toISOString(),
    dateOfBirth: new Date(2000, 05, 02).toISOString(),
    comments:
      "Tech enthusiasist, cracking problems is my specialization 🔓🔓🔓",
    moduleName: "NodeJs",
    moduleLectures: 320,
    currentLecture: 300,
  },
];

/////////////////////////////////////
// tasks perfomance variables

let tasks = [90, 50, 70]; //[0] -> assigned, [1] -> completed, [2] -> active tasks

function calcTasksPercentage(tasks) {
  const totalTasks = tasks.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // console.log(totalTasks);

  // assigned tasks
  const assignedPercentage = Math.trunc((tasks[0] / totalTasks) * 100);
  assignedTasks.ariaValueNow = `${assignedPercentage}`;
  assignedTasks.style.width =
    assignedTasks.textContent = `${assignedPercentage}%`;

  // completed tasks
  const completedPercentage = Math.trunc((tasks[1] / totalTasks) * 100);
  completeTasks.ariaValueNow = `${completedPercentage}`;
  completeTasks.style.width =
    completeTasks.textContent = `${completedPercentage}%`;

  // active tasks
  const activePercentage = Math.trunc((tasks[2] / totalTasks) * 100);
  activeTasks.ariaValueNow = `${activePercentage}`;
  activeTasks.style.width = activeTasks.textContent = `${activePercentage}%`;
}

calcTasksPercentage(tasks);

////////////////////////////////////////////////
// user progresses

function displayUserProgresses(users) {
  userProgressContainer.innerHTML = "";
  users.forEach((user) => {
    const percentage = Math.trunc(
      (user.currentLecture / user.moduleLectures) * 100
    );
    const html = `
    <div class="user__progress my-2 border-bottom">
      <div>
        <a href="/progress" style="text-decoration: none;"><img src="/images/user.jpg" alt="" class="img-fluid rounded-circle user__profile--image" style="height: 35px; width: 35px"/></a>
      </div>

      <div class="progress mt-2" style="height: 15px">
        <div class="progress-bar bg-success" role="progressbar"style="width: ${percentage}%; height: 15px" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">${percentage}%</div>
      </div>
      <p class="mx-5 mt-0 px-5 text-center text-success">${user.moduleName}</p>
      

    </div>`;

    userProgressContainer.insertAdjacentHTML("beforeend", html);
  });
}

displayUserProgresses(users);

// ///////////////////////////////////////////////
// active projects
// console.log(containerProjects);

function displayActiveProjects(activeProjects) {
  containerProjects.innerHTML = "";
  const barColors = ["bg-success", "bg-warning", "bg-info", "bg-danger"];
  activeProjects.forEach((project, i) => {
    let bgcolor = barColors[0]; //success by default
    if (i % 2 == 0) bgcolor = barColors[1];
    if (i % 3 == 0) bgcolor = barColors[2];
    if (i % 4 == 0) bgcolor = barColors[3];

    const percentage = Math.trunc(
      (project.completed / project.totalMillestones) * 100
    );
    const html = `
    <li class="text-secondary">${project.projectName}
      <div class="progress m-3">
      <div class="progress-bar ${bgcolor} progress-bar-striped" role="progressbar" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${percentage}%">
        ${percentage}%
      </div>
    </li>`;

    containerProjects.insertAdjacentHTML("afterbegin", html);
  });
}

displayActiveProjects(activeProjects);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// delete user
// const deleteBtn = document.querySelector("#delete__btn");
// const userEmail = document.querySelector(".user__email");
// deleteBtn.addEventListener("click", function (e) {
//   // // e.preventDefault();
//   // let index;
//   // users.forEach((user, i) => {
//   //   if (userEmail === user.userEmail) {
//   //     index = i;
//   //   }
//   // });

//   // console.log(users[index]);
//   // users.splice(index, 1);

//   alert("User account deleted!!!");
// });

// document.getElementById("delete__btn").addEventListener("submit", function () {
//   // alert("clicked");
//   console.log("where is the problem!");
// });
