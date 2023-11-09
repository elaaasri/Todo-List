import Project from "./projects.js";
import Task from "./tasks.js";
// DOM Form :
const projectPreviewContainer = document.getElementById("project-preview");
const projectHeaderName = document.getElementById("project-header-name");
const addTaskButton = document.getElementById("add-task-button");
const formSubmitTaskButton = document.getElementById("form-submit-task-button");
const formCancelTaskButton = document.getElementById("form-cancel-task-button");
const form = document.getElementById("form-task");
const formTitle = document.getElementById("title-field");
const formDetails = document.getElementById("details-field");
const formDate = document.getElementById("date-field");
const sidebarAddButton = document.getElementById("sidebar-add-button");
const projectItems = document.getElementById("sidebar-project-items");
const sidebarFormContainer = document.getElementById("sidebar-form-container");
const projectNameInput = document.getElementById("project-name-input");
const addProjectButton = document.getElementById("add-project-button");
// ############################""
const allProjects = [];
let selectedProject = null;
let projectName;
function addNewProject() {
  const project = new Project(projectNameInput.value);
  allProjects.push(project);
}
// DOM Elements
const DOMElement = {
  updateProjectPreview(element) {
    projectHeaderName.textContent = element.target.textContent;
    projectHeaderName.style.cssText = "display : flex";
    addTaskButton.style.cssText = "display : block";
  },
  createSideBarElement() {
    if (projectNameInput.value === "") return;
    const newProjectDiv = document.createElement("div");
    const projectName = projectNameInput.value;
    newProjectDiv.className = "sidebar-project";
    newProjectDiv.textContent = projectName;
    projectItems.appendChild(newProjectDiv);
  },
};
// event click to show side bar form :
addProjectButton.addEventListener("click", function () {
  sidebarFormContainer.style.cssText = "display : flex";
});
sidebarAddButton.addEventListener("click", function () {
  if (projectNameInput.value === "") return;
  DOMElement.createSideBarElement();
  addNewProject();
  sideBarElementAddEvent();
  projectNameInput.value = "";
});

function sideBarElementAddEvent() {
  const allSidebarProjectItems = document.querySelectorAll(".sidebar-project");
  allSidebarProjectItems.forEach((element) => {
    element.addEventListener("click", function (element) {
      form.style.cssText = "display : none";
      projectName = element.target.textContent;
      selectedProject = allProjects.find(
        (project) => project.name === projectName
      );
      DOMElement.updateProjectPreview(element);
      const allTasks = document.querySelectorAll("#form-task-output");
      allTasks.forEach((task) => {
        const projectDataValue = task.getAttribute("data-value");
        if (selectedProject.name === projectDataValue) {
          task.style.cssText = "display: flex";
        } else {
          task.style.cssText = "display: none";
        }
      });
    });
  });
}
// form submit event :
formSubmitTaskButton.addEventListener("click", function () {
  if (selectedProject) {
    // create the new task and add it to the selected project :
    const newTask = new Task(
      formTitle.value,
      formDetails.value,
      formDate.value
    );
    selectedProject.taskArr.push(newTask);
  }
  if (
    formTitle.value === "" ||
    formDetails.value === "" ||
    formDate.value === ""
  )
    return;
  const formTaskOutput = document.createElement("div");
  formTaskOutput.setAttribute("data-value", projectName);
  selectedProject.taskArr.forEach((task) => {
    formTaskOutput.id = "form-task-output";
    formTaskOutput.innerHTML = `
        <div id="check-title-div">
        <input id="checkbox-button" type="checkbox" />
        <div id="task-output-title">${task.title}</div>
        </div>
        <div id="task-output-details">${task.description}</div>
        <div id="task-output-date">${task.dueDate}</div>`;
    projectPreviewContainer.appendChild(formTaskOutput);
    cleanFormData();
  });
});
function cleanFormData() {
  form.reset();
}
// project preview add task button event :
addTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : flex";
});
// project preview form cancel button event :
formCancelTaskButton.addEventListener("click", function () {
  form.style.cssText = "display : none";
});
